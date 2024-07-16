import React from "react";
import { formatCurrencyAxis } from "../utils/format-currency-axis";
import { formatTimestampTo24HourTime, formatTimestampToDate } from "../utils/format-date";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from "recharts";
import Candlestick from "./Candlestick";
import CandlestickTooltip from "./CandlestickTooltip";
import prepareOHLC from "../utils/prepare-ohlc";
import OHLC from "../models/ohlc";
import { DAY } from "../config/time-ranges";
import { COLOR_PURPLE } from "../config/colors";

interface CandlestickChartProps {
    rawData: OHLC[];
    timeRange: string; 
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ rawData, timeRange }) => {
    const data: any[] = prepareOHLC(rawData);

    const interval: number = Math.max(1, Math.floor(data.length / 5));

    const minValue: number = data.reduce(
        (minValue, { low, openClose: [open, close] }) => {
            const currentMin = Math.min(low, open, close);
            return minValue === null || currentMin < minValue ? currentMin : minValue;
        },
        null as number | null
    );

    const maxValue: number = data.reduce(
        (maxValue, { high, openClose: [open, close] }) => {
            const currentMax = Math.max(high, open, close);
            return currentMax > maxValue ? currentMax : maxValue;
        },
        minValue as number | null
    );

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
                <XAxis 
                    dataKey="date"
                    interval={interval}
                    tickFormatter={value => timeRange === DAY.value ? formatTimestampTo24HourTime(value) : formatTimestampToDate(value)}
                />
                <YAxis domain={[minValue, maxValue]} tickFormatter={value => formatCurrencyAxis(value)} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip content={<CandlestickTooltip />} cursor={{ fill: COLOR_PURPLE }} />
                <Bar dataKey="openClose" shape={(props: any) => <Candlestick {...props} />}>
                    {data.map((entry, index) => <Cell key={`cell-${index}`} />)}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CandlestickChart;
