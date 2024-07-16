import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatTimestampTo24HourTime, formatTimestampToDate } from '../utils/format-date';
import { formatCurrencyAxis } from '../utils/format-currency-axis';
import Price from '../models/price';
import PriceTooltip from './PriceTooltip';
import { DAY } from '../config/time-ranges';
import { COLOR_PURPLE } from '../config/colors';

interface PriceChartProps {
  data: Price[];
  timeRange: string; 
}

const PriceChart: React.FC<PriceChartProps> = ({ data, timeRange }) => {
  const interval: number = Math.max(1, Math.floor(data.length / 5));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <XAxis
          dataKey="date"
          interval={interval}
          tickFormatter={value => timeRange === DAY.value ? formatTimestampTo24HourTime(value) : formatTimestampToDate(value)}
        />
        <YAxis tickFormatter={value => formatCurrencyAxis(value)} />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Tooltip content={<PriceTooltip />} />
        <Area type="monotone" dataKey="price" stroke={COLOR_PURPLE} fill={COLOR_PURPLE} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
