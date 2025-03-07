import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const invoices = [
  {
    id: "INV-001",
    date: "Mar 1, 2024",
    amount: "$15.00",
    status: "Paid",
    plan: "Pro Plan",
  },
  {
    id: "INV-002",
    date: "Feb 1, 2024",
    amount: "$15.00",
    status: "Paid",
    plan: "Pro Plan",
  },
  {
    id: "INV-003",
    date: "Jan 1, 2024",
    amount: "$15.00",
    status: "Paid",
    plan: "Pro Plan",
  },
]

export function BillingHistory() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Plan</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.plan}</TableCell>
            <TableCell>
              <Badge variant="secondary">{invoice.status}</Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                Download
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
} 