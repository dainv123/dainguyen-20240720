const calculateMaxProfit = (prices: number[]) => {
    if (prices.length < 2) {
        return 0;
    }

    let maxProfit = 0;
    let minPrice = prices[0];

    for (let index = 1; index < prices.length; index++) {
        const price = prices[index];
        
        if (price < minPrice) {
            minPrice = price;
        }

        const currentProfit = price - minPrice;

        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }

    return maxProfit;
}

export default calculateMaxProfit;