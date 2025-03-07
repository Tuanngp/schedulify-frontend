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

const devices = [
  {
    id: 1,
    name: "Windows PC",
    location: "Ho Chi Minh City, Vietnam",
    lastActive: "Active now",
    browser: "Chrome",
    os: "Windows 11",
    isCurrent: true,
  },
  {
    id: 2,
    name: "iPhone 13",
    location: "Ho Chi Minh City, Vietnam",
    lastActive: "2 hours ago",
    browser: "Safari",
    os: "iOS 16",
    isCurrent: false,
  },
  {
    id: 3,
    name: "MacBook Pro",
    location: "Da Nang, Vietnam",
    lastActive: "3 days ago",
    browser: "Firefox",
    os: "macOS",
    isCurrent: false,
  },
]

export function ConnectedDevices() {
  return (
    <div className="space-y-4">
      {devices.map((device) => (
        <Card key={device.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium">
                {device.name}
                {device.isCurrent && (
                  <Badge className="ml-2" variant="secondary">
                    Current Device
                  </Badge>
                )}
              </CardTitle>
              <div className="text-sm text-muted-foreground">
                {device.lastActive}
              </div>
            </div>
            <CardDescription>{device.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              {device.browser} on {device.os}
            </div>
          </CardContent>
          {!device.isCurrent && (
            <CardFooter>
              <Button variant="destructive" size="sm">
                Sign Out
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  )
} 