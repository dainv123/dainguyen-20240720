import React from 'react';
import { TooltipProps } from 'recharts';
import { formatDateUTC } from '../utils/format-date';
import { formatCurrency } from '../utils/format-currency';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const PriceTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload }) => {
  if (active && payload?.length) {
    const context = payload[0].payload;
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p className="label">{`${formatDateUTC(context.date as number)}`}</p>
        <p className="intro">{`Price: ${formatCurrency(context.price as number)}`}</p>
      </div>
    );
  }

  return null;
};

export default PriceTooltip;
