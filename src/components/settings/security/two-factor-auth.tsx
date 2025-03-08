"use client"

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

export function TwoFactorAuth() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [showSetupDialog, setShowSetupDialog] = useState(false)

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">
              Two-Factor Authentication
            </CardTitle>
            <Badge variant={isEnabled ? "default" : "secondary"}>
              {isEnabled ? "Enabled" : "Disabled"}
            </Badge>
          </div>
          <CardDescription>
            Add an extra layer of security to your account by requiring both a
            password and an authentication code.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          {isEnabled ? (
            <Button
              variant="destructive"
              onClick={() => setIsEnabled(false)}
            >
              Disable 2FA
            </Button>
          ) : (
            <Button onClick={() => setShowSetupDialog(true)}>Enable 2FA</Button>
          )}
        </CardFooter>
      </Card>

      <Dialog open={showSetupDialog} onOpenChange={setShowSetupDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Set up Two-Factor Authentication</DialogTitle>
            <DialogDescription>
              Scan the QR code below with your authenticator app and enter the
              verification code to enable 2FA.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-center">
              {/* Placeholder for QR code image */}
              <div className="h-48 w-48 bg-muted" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="verificationCode">Verification Code</Label>
              <Input
                id="verificationCode"
                placeholder="Enter 6-digit code"
                maxLength={6}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSetupDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setIsEnabled(true)
                setShowSetupDialog(false)
              }}
            >
              Verify and Enable
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
} 