"use client"

import { useState, useEffect } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Plus, Trash2, Edit, BookOpen, Bookmark, Shuffle } from "lucide-react"

interface Flashcard {
  id: string
  deckId: string
  front: string
  back: string
  lastReviewed?: any
  nextReview?: any
  difficulty?: "easy" | "medium" | "hard"
  createdAt: any
}

interface Deck {
  id: string
  name: string
  description: string
  subject: string
  cardCount: number
  createdAt: any
  lastStudied?: any
}

export default function FlashcardsPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [decks, setDecks] = useState<Deck[]>([])
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null)
  const [cards, setCards] = useState<Flashcard[]>([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [studyMode, setStudyMode] = useState(false)
  const [createDeckOpen, setCreateDeckOpen] = useState(false)
  const [addCardOpen, setAddCardOpen] = useState(false)
  const [newDeck, setNewDeck] = useState({
    name: "",
    description: "",
    subject: "",
  })
  const [newCard, setNewCard] = useState({
    front: "",
    back: "",
  })
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null)

  // Available subjects
  const subjects = [
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Literature",
    "Economics",
    "Computer Science",
    "Geography",
    "History",
  ]

  useEffect(() => {
    if (user) {
      fetchDecks()
    } else {
      setLoading(false)
    }
  }, [user])

  const fetchDecks = async () => {
    if (!user) return

    try {
      setLoading(true)

      const decksRef = collection(db, "flashcardDecks")
      const q = query(decksRef, where("userId", "==", user.uid), orderBy("createdAt", "desc"))

      const querySnapshot = await getDocs(q)
      const fetchedDecks: Deck[] = []

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        fetchedDecks.push({
          id: doc.id,
          name: data.name,
          description: data.description,
          subject: data.subject,
          cardCount: data.cardCount || 0,
          createdAt: data.createdAt,
          lastStudied: data.lastStudied,
        })
      })

      setDecks(fetchedDecks)
    } catch (error) {
      console.error("Error fetching flashcard decks:", error)
      toast({
        title: "Error",
        description: "Failed to load your flashcard decks.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const fetchCards = async (deckId: string) => {
    if (!user) return

    try {
      setLoading(true)

      const cardsRef = collection(db, "flashcards")
      const q = query(cardsRef, where("deckId", "==", deckId), orderBy("createdAt", "asc"))

      const querySnapshot = await getDocs(q)
      const fetchedCards: Flashcard[] = []

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        fetchedCards.push({
          id: doc.id,
          deckId: data.deckId,
          front: data.front,
          back: data.back,
          lastReviewed: data.lastReviewed,
          nextReview: data.nextReview,
          difficulty: data.difficulty,
          createdAt: data.createdAt,
        })
      })

      setCards(fetchedCards)
      setCurrentCardIndex(0)
      setShowAnswer(false)
    } catch (error) {
      console.error("Error fetching flashcards:", error)
      toast({
        title: "Error",
        description: "Failed to load flashcards.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSelectDeck = async (deck: Deck) => {
    setSelectedDeck(deck)
    await fetchCards(deck.id)
  }

  const handleCreateDeck = async () => {
    if (!user) return

    if (!newDeck.name || !newDeck.subject) {
      toast({
        title: "Missing Information",
        description: "Please provide a name and subject for your deck.",
        variant: "destructive",
      })
      return
    }

    try {
      const deckData = {
        name: newDeck.name,
        description: newDeck.description,
        subject: newDeck.subject,
        userId: user.uid,
        cardCount: 0,
        createdAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "flashcardDecks"), deckData)

      const newDeckWithId: Deck = {
        id: docRef.id,
        name: newDeck.name,
        description: newDeck.description,
        subject: newDeck.subject,
        cardCount: 0,
        createdAt: new Date(),
      }

      setDecks([newDeckWithId, ...decks])
      setNewDeck({
        name: "",
        description: "",
        subject: "",
      })
      setCreateDeckOpen(false)

      toast({
        title: "Deck Created",
        description: "Your new flashcard deck has been created.",
      })

      // Select the new deck
      setSelectedDeck(newDeckWithId)
      setCards([])
    } catch (error) {
      console.error("Error creating deck:", error)
      toast({
        title: "Error",
        description: "Failed to create flashcard deck.",
        variant: "destructive",
      })
    }
  }

  const handleAddCard = async () => {
    if (!user || !selectedDeck) return

    if (!newCard.front || !newCard.back) {
      toast({
        title: "Missing Information",
        description: "Please provide content for both sides of the flashcard.",
        variant: "destructive",
      })
      return
    }

    try {
      const cardData = {
        deckId: selectedDeck.id,
        front: newCard.front,
        back: newCard.back,
        userId: user.uid,
        createdAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "flashcards"), cardData)

      // Update card count in deck
      await updateDoc(doc(db, "flashcardDecks", selectedDeck.id), {
        cardCount: (selectedDeck.cardCount || 0) + 1,
      })

      const newCardWithId: Flashcard = {
        id: docRef.id,
        deckId: selectedDeck.id,
        front: newCard.front,
        back: newCard.back,
        createdAt: new Date(),
      }

      setCards([...cards, newCardWithId])
      setNewCard({
        front: "",
        back: "",
      })
      setAddCardOpen(false)

      // Update deck in state
      setDecks(
        decks.map((deck) => (deck.id === selectedDeck.id ? { ...deck, cardCount: (deck.cardCount || 0) + 1 } : deck)),
      )

      setSelectedDeck({
        ...selectedDeck,
        cardCount: (selectedDeck.cardCount || 0) + 1,
      })

      toast({
        title: "Card Added",
        description: "Your new flashcard has been added to the deck.",
      })
    } catch (error) {
      console.error("Error adding card:", error)
      toast({
        title: "Error",
        description: "Failed to add flashcard.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateCard = async () => {
    if (!user || !selectedDeck || !editingCard) return

    if (!newCard.front || !newCard.back) {
      toast({
        title: "Missing Information",
        description: "Please provide content for both sides of the flashcard.",
        variant: "destructive",
      })
      return
    }

    try {
      await updateDoc(doc(db, "flashcards", editingCard.id), {
        front: newCard.front,
        back: newCard.back,
      })

      setCards(
        cards.map((card) =>
          card.id === editingCard.id ? { ...card, front: newCard.front, back: newCard.back } : card,
        ),
      )

      setNewCard({
        front: "",
        back: "",
      })
      setEditingCard(null)
      setAddCardOpen(false)

      toast({
        title: "Card Updated",
        description: "Your flashcard has been updated.",
      })
    } catch (error) {
      console.error("Error updating card:", error)
      toast({
        title: "Error",
        description: "Failed to update flashcard.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteCard = async (cardId: string) => {
    if (!user || !selectedDeck) return

    try {
      await deleteDoc(doc(db, "flashcards", cardId))

      // Update card count in deck
      await updateDoc(doc(db, "flashcardDecks", selectedDeck.id), {
        cardCount: Math.max((selectedDeck.cardCount || 0) - 1, 0),
      })

      setCards(cards.filter((card) => card.id !== cardId))

      // Update deck in state
      setDecks(
        decks.map((deck) =>
          deck.id === selectedDeck.id ? { ...deck, cardCount: Math.max((deck.cardCount || 0) - 1, 0) } : deck,
        ),
      )

      setSelectedDeck({
        ...selectedDeck,
        cardCount: Math.max((selectedDeck.cardCount || 0) - 1, 0),
      })

      toast({
        title: "Card Deleted",
        description: "The flashcard has been removed from the deck.",
      })
    } catch (error) {
      console.error("Error deleting card:", error)
      toast({
        title: "Error",
        description: "Failed to delete flashcard.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteDeck = async (deckId: string) => {
    if (!user) return

    try {
      await deleteDoc(doc(db, "flashcardDecks", deckId))

      // Remove all cards in the deck
      const cardsRef = collection(db, "flashcards")
      const q = query(cardsRef, where("deckId", "==", deckId))
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref)
      })

      setDecks(decks.filter((deck) => deck.id !== deckId))

      if (selectedDeck && selectedDeck.id === deckId) {
        setSelectedDeck(null)
        setCards([])
      }

      toast({
        title: "Deck Deleted",
        description: "The flashcard deck and all its cards have been deleted.",
      })
    } catch (error) {
      console.error("Error deleting deck:", error)
      toast({
        title: "Error",
        description: "Failed to delete flashcard deck.",
        variant: "destructive",
      })
    }
  }

  const startStudySession = () => {
    if (cards.length === 0) {
      toast({
        title: "No Cards",
        description: "This deck has no flashcards. Add some cards first.",
        variant: "destructive",
      })
      return
    }

    setStudyMode(true)
    setCurrentCardIndex(0)
    setShowAnswer(false)

    // Shuffle cards for study session
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
  }

  const endStudySession = async () => {
    if (!user || !selectedDeck) return

    setStudyMode(false)
    setShowAnswer(false)

    try {
      // Update last studied timestamp
      await updateDoc(doc(db, "flashcardDecks", selectedDeck.id), {
        lastStudied: serverTimestamp(),
      })

      // Update deck in state
      setDecks(decks.map((deck) => (deck.id === selectedDeck.id ? { ...deck, lastStudied: new Date() } : deck)))

      setSelectedDeck({
        ...selectedDeck,
        lastStudied: new Date(),
      })
    } catch (error) {
      console.error("Error updating study session:", error)
    }
  }

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setShowAnswer(false)
    } else {
      // End of deck
      endStudySession()
      toast({
        title: "Study Session Complete",
        description: "You've reviewed all the flashcards in this deck.",
      })
    }
  }

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setShowAnswer(false)
    }
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Never"

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Flashcards" text="Create and study flashcards to improve your memory and recall">
        <Dialog open={createDeckOpen} onOpenChange={setCreateDeckOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Deck
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Flashcard Deck</DialogTitle>
              <DialogDescription>Create a new deck to organize your flashcards by subject or topic.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Deck Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Biology Terms"
                  value={newDeck.name}
                  onChange={(e) => setNewDeck({ ...newDeck, name: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={newDeck.subject} onValueChange={(value) => setNewDeck({ ...newDeck, subject: value })}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subj) => (
                      <SelectItem key={subj} value={subj}>
                        {subj}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of this deck"
                  value={newDeck.description}
                  onChange={(e) => setNewDeck({ ...newDeck, description: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setCreateDeckOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateDeck}>Create Deck</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DashboardHeader>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Your Flashcard Decks</CardTitle>
              <CardDescription>Select a deck to view or study</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </div>
              ) : decks.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No flashcard decks yet</h3>
                  <p className="text-muted-foreground mb-4">Create your first deck to get started</p>
                  <Button onClick={() => setCreateDeckOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Deck
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  {decks.map((deck) => (
                    <div
                      key={deck.id}
                      className={`p-3 rounded-lg border cursor-pointer hover:bg-muted/50 transition-colors ${
                        selectedDeck?.id === deck.id ? "bg-muted" : ""
                      }`}
                      onClick={() => handleSelectDeck(deck)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{deck.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {deck.description || deck.subject}
                          </p>
                        </div>
                        <Badge variant="outline">{deck.cardCount} cards</Badge>
                      </div>
                      <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
                        <span>Last studied: {formatDate(deck.lastStudied)}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteDeck(deck.id)
                          }}
                        >
                          <Trash2 className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          {selectedDeck ? (
            studyMode ? (
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{selectedDeck.name} - Study Session</CardTitle>
                    <Badge variant="outline">
                      {currentCardIndex + 1} / {cards.length}
                    </Badge>
                  </div>
                  <CardDescription>Click the card to reveal the answer</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  {cards.length > 0 ? (
                    <div
                      className="flex-1 flex flex-col justify-center items-center cursor-pointer"
                      onClick={() => setShowAnswer(!showAnswer)}
                    >
                      <div className="w-full max-w-md aspect-[3/2] perspective-1000">
                        <div
                          className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${showAnswer ? "rotate-y-180" : ""}`}
                        >
                          <div className="absolute w-full h-full backface-hidden bg-card border rounded-xl p-6 flex flex-col justify-center items-center">
                            <div className="text-xl font-medium text-center">{cards[currentCardIndex].front}</div>
                            <div className="mt-4 text-sm text-muted-foreground">Click to reveal answer</div>
                          </div>
                          <div className="absolute w-full h-full backface-hidden bg-card border rounded-xl p-6 flex flex-col justify-center items-center rotate-y-180">
                            <div className="text-xl font-medium text-center">{cards[currentCardIndex].back}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <p className="text-muted-foreground">No cards in this deck</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex justify-between w-full">
                    <Button variant="outline" onClick={prevCard} disabled={currentCardIndex === 0}>
                      Previous
                    </Button>
                    <Button variant="outline" onClick={endStudySession}>
                      End Session
                    </Button>
                    <Button onClick={nextCard}>{currentCardIndex === cards.length - 1 ? "Finish" : "Next"}</Button>
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{selectedDeck.name}</CardTitle>
                        <CardDescription>
                          {selectedDeck.description || `Subject: ${selectedDeck.subject}`}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={startStudySession}
                          disabled={selectedDeck.cardCount === 0}
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          Study
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const shuffledCards = [...cards].sort(() => Math.random() - 0.5)
                            setCards(shuffledCards)
                            toast({
                              title: "Cards Shuffled",
                              description: "The order of flashcards has been randomized.",
                            })
                          }}
                          disabled={cards.length < 2}
                        >
                          <Shuffle className="mr-2 h-4 w-4" />
                          Shuffle
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-2">
                        <Badge variant="outline">{selectedDeck.cardCount} cards</Badge>
                        <Badge variant="outline">{selectedDeck.subject}</Badge>
                      </div>
                      <Dialog open={addCardOpen} onOpenChange={setAddCardOpen}>
                        <DialogTrigger asChild>
                          <Button size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Card
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{editingCard ? "Edit Flashcard" : "Add New Flashcard"}</DialogTitle>
                            <DialogDescription>
                              {editingCard
                                ? "Update the content of this flashcard"
                                : "Create a new flashcard for this deck"}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="front">Front (Question)</Label>
                              <Textarea
                                id="front"
                                placeholder="Enter the question or term"
                                value={newCard.front}
                                onChange={(e) => setNewCard({ ...newCard, front: e.target.value })}
                                rows={3}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="back">Back (Answer)</Label>
                              <Textarea
                                id="back"
                                placeholder="Enter the answer or definition"
                                value={newCard.back}
                                onChange={(e) => setNewCard({ ...newCard, back: e.target.value })}
                                rows={3}
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button
                              variant="outline"
                              onClick={() => {
                                setAddCardOpen(false)
                                setEditingCard(null)
                                setNewCard({ front: "", back: "" })
                              }}
                            >
                              Cancel
                            </Button>
                            <Button onClick={editingCard ? handleUpdateCard : handleAddCard}>
                              {editingCard ? "Update Card" : "Add Card"}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {loading ? (
                      <div className="flex justify-center py-8">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                      </div>
                    ) : cards.length === 0 ? (
                      <div className="text-center py-8">
                        <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No flashcards yet</h3>
                        <p className="text-muted-foreground mb-4">Add some flashcards to this deck to start studying</p>
                        <Button onClick={() => setAddCardOpen(true)}>
                          <Plus className="mr-2 h-4 w-4" />
                          Add Card
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {cards.map((card, index) => (
                          <div key={card.id} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <Badge variant="outline">Card {index + 1}</Badge>
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => {
                                    setEditingCard(card)
                                    setNewCard({
                                      front: card.front,
                                      back: card.back,
                                    })
                                    setAddCardOpen(true)
                                  }}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleDeleteCard(card.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="border rounded-md p-3 bg-muted/30">
                                <div className="text-sm font-medium mb-1">Front:</div>
                                <div>{card.front}</div>
                              </div>
                              <div className="border rounded-md p-3 bg-muted/30">
                                <div className="text-sm font-medium mb-1">Back:</div>
                                <div>{card.back}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )
          ) : (
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center h-[400px]">
                <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No Deck Selected</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Select a flashcard deck from the list or create a new one to get started
                </p>
                <Button onClick={() => setCreateDeckOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Deck
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </DashboardShell>
  )
}
