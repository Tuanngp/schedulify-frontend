import { Separator } from "@/components/ui/separator"
import { CurrentPlan } from "@/components/settings/subscription/current-plan"
import { BillingHistory } from "@/components/settings/subscription/billing-history"
import { PaymentMethods } from "@/components/settings/subscription/payment-methods"

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Subscription</h3>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and billing information.
        </p>
      </div>
      <Separator />
      <CurrentPlan />
      
      <div className="mt-8">
        <h4 className="text-sm font-medium">Payment Methods</h4>
        <p className="text-sm text-muted-foreground">
          Manage your payment methods and billing preferences.
        </p>
      </div>
      <Separator />
      <PaymentMethods />

      <div className="mt-8">
        <h4 className="text-sm font-medium">Billing History</h4>
        <p className="text-sm text-muted-foreground">
          View your billing history and download invoices.
        </p>
      </div>
      <Separator />
      <BillingHistory />
    </div>
  )
} 