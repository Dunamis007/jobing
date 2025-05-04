"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Search } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export function AdminUserTable() {
  const [searchQuery, setSearchQuery] = useState("")

  const users = [
    {
      id: "u1",
      name: "John Doe",
      email: "john@example.com",
      role: "student",
      status: "active",
      joinDate: "2023-01-15",
      courses: 3,
    },
    {
      id: "u2",
      name: "Sarah Smith",
      email: "sarah@example.com",
      role: "student",
      status: "active",
      joinDate: "2023-02-20",
      courses: 5,
    },
    {
      id: "u3",
      name: "Michael Johnson",
      email: "michael@example.com",
      role: "student",
      status: "inactive",
      joinDate: "2023-01-10",
      courses: 2,
    },
    {
      id: "u4",
      name: "Emily Brown",
      email: "emily@example.com",
      role: "admin",
      status: "active",
      joinDate: "2022-11-05",
      courses: 0,
    },
    {
      id: "u5",
      name: "David Wilson",
      email: "david@example.com",
      role: "instructor",
      status: "active",
      joinDate: "2023-03-15",
      courses: 4,
    },
  ]

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAction = (action: string, userId: string) => {
    toast({
      title: `Action: ${action}`,
      description: `Performed ${action} on user ID: ${userId}`,
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
            className="pl-8 w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>Add User</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center h-24">
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === "admin" ? "default" : "outline"}>{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === "active" ? "success" : "secondary"}>{user.status}</Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.courses}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleAction("view", user.id)}>View Details</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("edit", user.id)}>Edit User</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("reset", user.id)}>
                          Reset Password
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => handleAction(user.status === "active" ? "deactivate" : "activate", user.id)}
                          className={user.status === "active" ? "text-destructive" : ""}
                        >
                          {user.status === "active" ? "Deactivate User" : "Activate User"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
