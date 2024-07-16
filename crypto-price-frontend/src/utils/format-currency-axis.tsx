export const formatCurrencyAxis = (value: number) => {
    if (value >= 1e6) {
        return `$${(value / 1e6).toFixed(1)}m`;
    } else if (value >= 1e3) {
        return `$${(value / 1e3).toFixed(1)}k`;
    }
    return `$${value.toString()}`;
};