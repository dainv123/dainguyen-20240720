import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { TIME_RANGES } from '../config/time-ranges';
import { TIME_RANGE_LABEL } from '../config/messages';

interface TimeRangeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ value, onChange }) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  }

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="time-range-select-label">{TIME_RANGE_LABEL}</InputLabel>
      <Select
        label={TIME_RANGE_LABEL}
        labelId="time-range-select-label"
        value={value}
        onChange={handleChange}
      >
        {TIME_RANGES.map((range) => (
          <MenuItem key={range.value} value={range.value}>{range.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TimeRangeSelector;
