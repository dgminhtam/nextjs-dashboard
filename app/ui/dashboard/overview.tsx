'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Revenue } from "@/app/lib/definitions";

export function Overview({ data }: { data: Revenue[] }) {
  const chartData = data.map((item) => ({
    name: item.month,
    total: item.revenue,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}