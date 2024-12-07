import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchRevenue } from '@/app/lib/data';
import { generateYAxis } from '@/app/lib/utils';
import { Overview } from "@/app/ui/dashboard/overview";

export type Revenue = {
  month: string;
  revenue: number;
};

export default async function RevenueChart() {
  // Lấy dữ liệu Revenue từ API
  const rawRevenue = await fetchRevenue();

  // Chuyển đổi dữ liệu để đảm bảo khớp kiểu Revenue
  const revenue: Revenue[] = rawRevenue.map((item: any) => ({
    month: item.month,
    revenue: item.revenue,
  }));

  if (!Array.isArray(revenue) || revenue.length === 0) {
    return (
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>No data available.</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Revenue</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <Overview data={revenue}/>
      </CardContent>
    </Card>
  );
}