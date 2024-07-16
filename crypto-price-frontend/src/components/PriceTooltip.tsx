import React from 'react';
import { TooltipProps } from 'recharts';
import { formatDateUTC } from '../utils/format-date';
import { formatCurrency } from '../utils/format-currency';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

const PriceTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p className="label">{`${formatDateUTC(payload[0].payload.date as number)}`}</p>
        <p className="intro">{`Price: ${formatCurrency(payload[0].payload.price as number)}`}</p>
      </div>
    );
  }

  return null;
};

export default PriceTooltip;
