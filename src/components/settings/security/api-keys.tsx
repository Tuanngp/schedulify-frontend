"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const apiKeys = [
  {
    id: 1,
    name: "Production API Key",
    key: "sk_live_...",
    createdAt: "2024-03-01",
    lastUsed: "1 hour ago",
  },
  {
    id: 2,
    name: "Development API Key",
    key: "sk_test_...",
    createdAt: "2024-02-15",
    lastUsed: "3 days ago",
  },
]

export function ApiKeys() {
  const [showCreateDialog, setShowCreateDialog] = useState(false)

  return (
    <>
      <div className="space-y-4">
        <Button variant="outline" onClick={() => setShowCreateDialog(true)}>
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create New API Key
        </Button>

        {apiKeys.map((apiKey) => (
          <Card key={apiKey.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">
                  {apiKey.name}
                </CardTitle>
                <Badge variant="secondary">Active</Badge>
              </div>
              <CardDescription>Created on {apiKey.createdAt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Input
                  value={apiKey.key}
                  readOnly
                  type="password"
                  className="font-mono"
                />
                <Button variant="outline" size="sm">
                  Copy
                </Button>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Last used: {apiKey.lastUsed}
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" size="sm">
                Revoke Key
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New API Key</DialogTitle>
            <DialogDescription>
              Create a new API key for accessing the API programmatically.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">API Key Name</Label>
              <Input id="name" placeholder="Enter API key name" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowCreateDialog(false)}>
              Create API Key
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
} 