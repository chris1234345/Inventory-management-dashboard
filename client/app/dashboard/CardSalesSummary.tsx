import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingUp } from "lucide-react";
import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardSalesSummary = () => {
    const {data, isLoading, isError} = useGetDashboardMetricsQuery();
    const salesData = data?.salesSummary || [];

    const [timeframe, setTimeframe] = useState("weekly");

    if(isError) {
        return <div className="m-5">Failed to fetch Data</div>
    }

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between">
        {isLoading ? 
        <div className="m-5">Loading...</div> :
        <>
        {/* header */}
        <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">Sales Summary</h2>
        </div>
        </>
        }
    </div>
  );
};

export default CardSalesSummary;