import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "@/components/settings/profile-form"
import { CompanyForm } from "@/components/settings/company-form"
import { PreferencesForm } from "@/components/settings/preferences-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Manage your personal information and preferences.
        </p>
      </div>
      <Separator />
      <ProfileForm />
      
      <div className="mt-8">
        <h3 className="text-lg font-medium">Company Details</h3>
        <p className="text-sm text-muted-foreground">
          Update your company information.
        </p>
      </div>
      <Separator />
      <CompanyForm />

      <div className="mt-8">
        <h3 className="text-lg font-medium">Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Customize your account preferences.
        </p>
      </div>
      <Separator />
      <PreferencesForm />
    </div>
  )
} 