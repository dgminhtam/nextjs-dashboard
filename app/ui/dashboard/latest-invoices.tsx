import { DataTableDemo } from "@/app/ui/dashboard/data-table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function LatestInvoices() {

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Latest Invoices</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <DataTableDemo />
      </CardContent>
    </Card>
  );
}