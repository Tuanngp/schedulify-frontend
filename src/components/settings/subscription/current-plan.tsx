import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    description: "Basic features for personal use",
    price: "$0",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "24-hour support response time",
    ],
    current: true,
  },
  {
    name: "Pro",
    description: "Perfect for professionals and small teams",
    price: "$15",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "4-hour support response time",
      "Team collaboration",
      "Custom domains",
    ],
    current: false,
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    price: "Contact us",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantees",
      "Custom contracts",
    ],
    current: false,
  },
]

export function CurrentPlan() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <Card key={plan.name} className={plan.current ? "border-primary" : ""}>
          <CardHeader>
            <CardTitle>
              {plan.name}
              {plan.current && (
                <Badge className="ml-2" variant="secondary">
                  Current Plan
                </Badge>
              )}
            </CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{plan.price}</div>
            <p className="text-xs text-muted-foreground">per user/month</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              variant={plan.current ? "outline" : "default"}
            >
              {plan.current ? "Current Plan" : "Upgrade"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
} 