"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/components/ui/use-toast"
import { userSettingsService, type UserSettings } from "@/lib/firebase-service"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "@/lib/firebase"
import { Loader2, Camera, Moon, Sun, Laptop } from "lucide-react"

export default function SettingsPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [settings, setSettings] = useState<UserSettings | null>(null)
  const [displayName, setDisplayName] = useState("")
  const [uploadingPhoto, setUploadingPhoto] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (user) {
      loadSettings()
    }
  }, [user])

  const loadSettings = async () => {
    try {
      setLoading(true)

      if (!user) return

      const userSettings = await userSettingsService.getUserSettings(user.uid)
      setSettings(userSettings)

      // Initialize form values
      setDisplayName(userSettings.displayName || user.displayName || "")
    } catch (error) {
      console.error("Error loading settings:", error)
      toast({
        title: "Error",
        description: "Failed to load settings. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSaveProfile = async () => {
    try {
      setSaving(true)

      if (!user) return

      await userSettingsService.updateUserSettings(user.uid, {
        displayName,
      })

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    } catch (error) {
      console.error("Error saving profile:", error)
      toast({
        title: "Update failed",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0] || !user) return

    try {
      setUploadingPhoto(true)

      const file = e.target.files[0]

      // Upload to Firebase Storage
      const storageRef = ref(storage, `profile_photos/${user.uid}`)
      await uploadBytes(storageRef, file)

      // Get download URL
      const photoURL = await getDownloadURL(storageRef)

      // Update user settings
      await userSettingsService.updateUserSettings(user.uid, {
        photoURL,
      })

      // Reload settings
      await loadSettings()

      toast({
        title: "Photo updated",
        description: "Your profile photo has been updated successfully.",
      })
    } catch (error) {
      console.error("Error uploading photo:", error)
      toast({
        title: "Upload failed",
        description: "There was an error uploading your photo. Please try again.",
        variant: "destructive",
      })
    } finally {
      setUploadingPhoto(false)
    }
  }

  const handleToggleNotification = async (type: string, enabled: boolean) => {
    try {
      if (!user || !settings) return

      const updatedPreferences = {
        ...settings.notificationPreferences,
        [type]: enabled,
      }

      await userSettingsService.updateUserSettings(user.uid, {
        notificationPreferences: updatedPreferences,
      })

      // Update local state
      setSettings({
        ...settings,
        notificationPreferences: updatedPreferences,
      })

      toast({
        title: "Notifications updated",
        description: `${type.charAt(0).toUpperCase() + type.slice(1)} notifications ${enabled ? "enabled" : "disabled"}.`,
      })
    } catch (error) {
      console.error("Error updating notifications:", error)
      toast({
        title: "Update failed",
        description: "There was an error updating your notification settings.",
        variant: "destructive",
      })
    }
  }

  const handleChangeTheme = async (theme: "light" | "dark" | "system") => {
    try {
      if (!user || !settings) return

      await userSettingsService.updateUserSettings(user.uid, {
        theme,
      })

      // Update local state
      setSettings({
        ...settings,
        theme,
      })

      toast({
        title: "Theme updated",
        description: `Theme set to ${theme}.`,
      })
    } catch (error) {
      console.error("Error updating theme:", error)
      toast({
        title: "Update failed",
        description: "There was an error updating your theme.",
        variant: "destructive",
      })
    }
  }

  const handleTogglePrivacy = async (setting: string, enabled: boolean) => {
    try {
      if (!user || !settings) return

      const updatedSettings = {
        ...settings.privacySettings,
        [setting]: enabled,
      }

      await userSettingsService.updateUserSettings(user.uid, {
        privacySettings: updatedSettings,
      })

      // Update local state
      setSettings({
        ...settings,
        privacySettings: updatedSettings,
      })

      toast({
        title: "Privacy settings updated",
        description: `Privacy setting updated successfully.`,
      })
    } catch (error) {
      console.error("Error updating privacy settings:", error)
      toast({
        title: "Update failed",
        description: "There was an error updating your privacy settings.",
        variant: "destructive",
      })
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Manage your account settings and preferences" />

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your profile information and how it appears to others</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {loading ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-16 w-16 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={settings?.photoURL || user?.photoURL || undefined} />
                        <AvatarFallback>{displayName.charAt(0) || user?.displayName?.charAt(0) || "U"}</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0">
                        <label
                          htmlFor="photo-upload"
                          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
                        >
                          {uploadingPhoto ? (
                            <Loader2 className="h-3 w-3 animate-spin" />
                          ) : (
                            <Camera className="h-3 w-3" />
                          )}
                          <span className="sr-only">Upload photo</span>
                        </label>
                        <input
                          id="photo-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handlePhotoUpload}
                          disabled={uploadingPhoto}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">{displayName || user?.displayName || "User"}</h3>
                      <p className="text-sm text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input
                        id="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Your display name"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" value={user?.email || ""} disabled />
                      <p className="text-xs text-muted-foreground">
                        Your email address is used for login and cannot be changed
                      </p>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="academicLevel">Academic Level</Label>
                      <Select
                        value={settings?.academicLevel || "JAMB Candidate"}
                        onValueChange={(value) => {
                          if (!settings) return
                          setSettings({
                            ...settings,
                            academicLevel: value,
                          })
                        }}
                      >
                        <SelectTrigger id="academicLevel">
                          <SelectValue placeholder="Select academic level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="JAMB Candidate">JAMB Candidate</SelectItem>
                          <SelectItem value="IJMB Student">IJMB Student</SelectItem>
                          <SelectItem value="JUPEB Student">JUPEB Student</SelectItem>
                          <SelectItem value="University Student">University Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveProfile} disabled={loading || saving}>
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="accountType">Account Type</Label>
                <div className="flex items-center justify-between">
                  <span>Free Account</span>
                  <Button variant="outline">Upgrade to Premium</Button>
                </div>
              </div>

              <Separator />

              <div className="grid gap-2">
                <Label>Delete Account</Label>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all your data</p>
                <Button variant="destructive" className="w-fit">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {loading ? (
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-6 w-10" />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={settings?.notificationPreferences?.email || false}
                      onCheckedChange={(checked) => handleToggleNotification("email", checked)}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications in the browser</p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={settings?.notificationPreferences?.push || false}
                      onCheckedChange={(checked) => handleToggleNotification("push", checked)}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                    </div>
                    <Switch
                      id="sms-notifications"
                      checked={settings?.notificationPreferences?.sms || false}
                      onCheckedChange={(checked) => handleToggleNotification("sms", checked)}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Types</CardTitle>
              <CardDescription>Choose which types of notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="assignment-notifications">Assignment Notifications</Label>
                  <p className="text-sm text-muted-foreground">Notifications about new assignments and deadlines</p>
                </div>
                <Switch id="assignment-notifications" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="message-notifications">Message Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Notifications about new messages in study groups and chats
                  </p>
                </div>
                <Switch id="message-notifications" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="scholarship-notifications">Scholarship Notifications</Label>
                  <p className="text-sm text-muted-foreground">Notifications about new scholarship opportunities</p>
                </div>
                <Switch id="scholarship-notifications" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>Choose your preferred theme</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-24 w-full" />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  <div
                    className={`flex flex-col items-center gap-2 rounded-md border-2 p-4 cursor-pointer ${
                      settings?.theme === "light" ? "border-primary" : "border-transparent hover:border-muted"
                    }`}
                    onClick={() => handleChangeTheme("light")}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Sun className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium">Light</span>
                  </div>

                  <div
                    className={`flex flex-col items-center gap-2 rounded-md border-2 p-4 cursor-pointer ${
                      settings?.theme === "dark" ? "border-primary" : "border-transparent hover:border-muted"
                    }`}
                    onClick={() => handleChangeTheme("dark")}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Moon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium">Dark</span>
                  </div>

                  <div
                    className={`flex flex-col items-center gap-2 rounded-md border-2 p-4 cursor-pointer ${
                      settings?.theme === "system" ? "border-primary" : "border-transparent hover:border-muted"
                    }`}
                    onClick={() => handleChangeTheme("system")}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Laptop className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium">System</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Manage your privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {loading ? (
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-6 w-10" />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="online-status">Show Online Status</Label>
                      <p className="text-sm text-muted-foreground">Allow others to see when you're online</p>
                    </div>
                    <Switch
                      id="online-status"
                      checked={settings?.privacySettings?.showOnlineStatus || false}
                      onCheckedChange={(checked) => handleTogglePrivacy("showOnlineStatus", checked)}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-progress">Show Progress</Label>
                      <p className="text-sm text-muted-foreground">Allow others to see your learning progress</p>
                    </div>
                    <Switch
                      id="show-progress"
                      checked={settings?.privacySettings?.showProgress || false}
                      onCheckedChange={(checked) => handleTogglePrivacy("showProgress", checked)}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="allow-messages">Allow Messages</Label>
                      <p className="text-sm text-muted-foreground">Allow others to send you direct messages</p>
                    </div>
                    <Switch
                      id="allow-messages"
                      checked={settings?.privacySettings?.allowMessages || false}
                      onCheckedChange={(checked) => handleTogglePrivacy("allowMessages", checked)}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data & Privacy</CardTitle>
              <CardDescription>Manage your data and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label>Download Your Data</Label>
                <p className="text-sm text-muted-foreground">Download a copy of all your data</p>
                <Button variant="outline" className="w-fit">
                  Download Data
                </Button>
              </div>

              <Separator />

              <div className="grid gap-2">
                <Label>Privacy Policy</Label>
                <p className="text-sm text-muted-foreground">
                  Read our privacy policy to understand how we handle your data
                </p>
                <Button variant="link" className="w-fit p-0">
                  View Privacy Policy
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
