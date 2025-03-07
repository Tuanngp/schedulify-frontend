import { Separator } from "@/components/ui/separator"
import { PasswordForm } from "@/components/settings/security/password-form"
import { TwoFactorAuth } from "@/components/settings/security/two-factor-auth"
import { ConnectedDevices } from "@/components/settings/security/connected-devices"
import { ApiKeys } from "@/components/settings/security/api-keys"

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Security</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account security and authentication methods.
        </p>
      </div>
      <Separator />
      <PasswordForm />

      <div className="mt-8">
        <h4 className="text-sm font-medium">Two-Factor Authentication</h4>
        <p className="text-sm text-muted-foreground">
          Add an extra layer of security to your account.
        </p>
      </div>
      <Separator />
      <TwoFactorAuth />

      <div className="mt-8">
        <h4 className="text-sm font-medium">Connected Devices</h4>
        <p className="text-sm text-muted-foreground">
          Manage devices that are currently signed in to your account.
        </p>
      </div>
      <Separator />
      <ConnectedDevices />

      <div className="mt-8">
        <h4 className="text-sm font-medium">API Keys</h4>
        <p className="text-sm text-muted-foreground">
          Manage API keys for accessing your account programmatically.
        </p>
      </div>
      <Separator />
      <ApiKeys />
    </div>
  )
} 