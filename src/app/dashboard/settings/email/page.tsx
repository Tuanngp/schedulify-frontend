import { Separator } from "@/components/ui/separator"
import { EmailPreferencesForm } from "@/components/settings/email/email-preferences-form"

export default function EmailPreferencesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Email Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Manage how you receive email notifications.
        </p>
      </div>
      <Separator />
      <EmailPreferencesForm />
    </div>
  )
} 