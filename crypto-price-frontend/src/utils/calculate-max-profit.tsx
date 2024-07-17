const calculateMaxProfit = (prices: number[]): number => {
    if (prices.length < 2) {
        return 0;
    }

    let maxProfit: number = 0;

    let minPrice: number = prices[0];

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