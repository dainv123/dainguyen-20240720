import OHLC from "./ohlc";
import Price from "./price";
import Statistics from "./statistics";

interface CoinResponse {
    ohlcs: OHLC[];
	prices: Price[];
	statistics: Statistics;
}

export default CoinResponse;