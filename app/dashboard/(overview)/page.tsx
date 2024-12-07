import CardWrapper from '@/app/ui/dashboard/card-wrapper';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Suspense } from 'react';
import {
    RevenueChartSkeleton,
    LatestInvoicesSkeleton,
    CardsSkeleton
} from '@/app/ui/skeletons';

export default async function Page() {
    return (
        <>
            <Suspense fallback={<CardsSkeleton />}>
                <CardWrapper />
            </Suspense>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </>
    )
}
