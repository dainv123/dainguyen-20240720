import React from "react";
import { TooltipProps } from "recharts";
import { formatDateUTC } from "../utils/format-date";
import { formatCurrency } from "../utils/format-currency";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

const CandlestickTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload }) => {
    if (active && payload?.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
          <p className="label">{`${formatDateUTC(payload[0].payload.date as number)}`}</p>
          <p className="intro">{`O: ${formatCurrency(payload[0].payload.openClose[0] as number)}`}</p>
          <p className="intro">{`H: ${formatCurrency(payload[0].payload.high as number)}`}</p>
          <p className="intro">{`L: ${formatCurrency(payload[0].payload.low as number)}`}</p>
          <p className="intro">{`C: ${formatCurrency(payload[0].payload.openClose[1] as number)}`}</p>
        </div>
      );
    }
  
    return null;
};

export default CandlestickTooltip;