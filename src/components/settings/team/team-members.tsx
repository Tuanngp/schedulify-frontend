"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    avatarUrl: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Member",
    status: "Active",
    avatarUrl: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Viewer",
    status: "Pending",
    avatarUrl: "https://github.com/shadcn.png",
  },
]

export function TeamMembers() {
  return (
    <div className="space-y-4">
      {members.map((member) => (
        <Card key={member.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatarUrl} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base font-medium">
                    {member.name}
                  </CardTitle>
                  <CardDescription>{member.email}</CardDescription>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={member.status === "Active" ? "default" : "secondary"}>
                  {member.status}
                </Badge>
                <Badge variant="outline">{member.role}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
              View Activity
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Actions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Change Role</DropdownMenuItem>
                <DropdownMenuItem>Reset Password</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  Remove Member
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
} 