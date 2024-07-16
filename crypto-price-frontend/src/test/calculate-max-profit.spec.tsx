import calculateMaxProfit from "../utils/calculate-max-profit";

describe('calculateMaxProfit', () => {
    it('should return the maximum profit when there are increasing prices', () => {
        const prices: number[] = [2, 3, 6, 4, 3];
        expect(calculateMaxProfit(prices)).toEqual(4);
    });

    it('should return 0 when there are no profits to be made', () => {
        const prices: number[] = [7, 6, 5, 4, 3, 2, 1];
        expect(calculateMaxProfit(prices)).toEqual(0);
    });

    it('should handle an empty array', () => {
        const prices: number[] = [];
        expect(calculateMaxProfit(prices)).toEqual(0);
    });

    it('should handle an array with one element', () => {
        const prices: number[] = [5];
        expect(calculateMaxProfit(prices)).toEqual(0);
    });

    it('should return 0 when all prices are the same', () => {
        const prices: number[] = [1, 1, 1, 1, 1, 1, 1];
        expect(calculateMaxProfit(prices)).toEqual(0);
    });
});
