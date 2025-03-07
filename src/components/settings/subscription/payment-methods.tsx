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

const paymentMethods = [
  {
    id: 1,
    type: "Credit Card",
    last4: "4242",
    expiry: "04/24",
    isDefault: true,
  },
  {
    id: 2,
    type: "Credit Card",
    last4: "5555",
    expiry: "05/25",
    isDefault: false,
  },
]

export function PaymentMethods() {
  return (
    <div className="space-y-4">
      <Button variant="outline" className="mb-4">
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
        Add Payment Method
      </Button>

      {paymentMethods.map((method) => (
        <Card key={method.id}>
          <CardHeader>
            <CardTitle className="flex items-center text-base font-medium">
              {method.type} ending in {method.last4}
              {method.isDefault && (
                <Badge className="ml-2" variant="secondary">
                  Default
                </Badge>
              )}
            </CardTitle>
            <CardDescription>Expires {method.expiry}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" className="text-destructive">
              Remove
            </Button>
            {!method.isDefault && (
              <Button variant="outline">Make Default</Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
} 