"use client"

import { Separator } from "@/components/ui/separator"
import { TeamMembers } from "@/components/settings/team/team-members"
import { InviteMembers } from "@/components/settings/team/invite-members"

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Team Management</h3>
        <p className="text-sm text-muted-foreground">
          Manage your team members and invite new members to join.
        </p>
      </div>
      <Separator />
      <InviteMembers />

      <div className="mt-8">
        <h4 className="text-sm font-medium">Team Members</h4>
        <p className="text-sm text-muted-foreground">
          View and manage your team members.
        </p>
      </div>
      <Separator />
      <TeamMembers />
    </div>
  )
} 