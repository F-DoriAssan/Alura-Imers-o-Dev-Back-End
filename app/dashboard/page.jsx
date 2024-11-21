'use client';

import { useContext } from 'react';
import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { AdminContext } from '@/context/admin-provider';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const Dashboard = () => {
  const { totalUser, totalGamer, totalChannel } = useContext(AdminContext);

  const chartData = [
    { category: 'Users', count: totalUser?.length || 0 },
 
  ];

  const chartConfig = {
    count: {
      label: 'Count',
      color: 'hsl(var(--chart-1))',
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-5 space-y-8">
      <h2 className="text-3xl font-bold text-muted-foreground">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
        {[
          { title: 'Users', count: totalUser?.length || 0 },

        ].map(({ title, count }, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-xl font-bold text-primary">{count}</CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
          <CardDescription>Overview of Items</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart data={chartData} barGap={10}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="category"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="count" fill="var(--color-desktop)" radius={8} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total counts for all categories
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
