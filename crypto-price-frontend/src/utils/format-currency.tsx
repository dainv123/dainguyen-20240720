export const formatCurrency = (value: number) => {
    let formattedValue: string;
    
    if (!value) {
        return '0.00';
    } else if (value >= 1) {
        formattedValue = value.toFixed(2); 
    } else if (value < 1 && value > 0.001) {
        formattedValue = value.toFixed(5); 
    } else {
        formattedValue = value.toFixed(8); 
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 8,
    }).format(parseFloat(formattedValue));
};
