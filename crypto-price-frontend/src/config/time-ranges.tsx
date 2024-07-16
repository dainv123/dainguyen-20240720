import TimeRange from "../models/time-range";

export const DAY: TimeRange = {
    value: '1',
    label: '1 Day'
};

export const WEEK: TimeRange = {
    value: '7',
    label: '1 Week'
};

export const MONTH: TimeRange = {
    value: '30',
    label: '1 Month'
};

export const THREE_MONTHS: TimeRange = {
    value: '90',
    label: '3 Months'
};

export const TIME_RANGES: TimeRange[] = [DAY, WEEK, MONTH, THREE_MONTHS];

export const TIME_RANGE_DEFAULT: TimeRange = WEEK;