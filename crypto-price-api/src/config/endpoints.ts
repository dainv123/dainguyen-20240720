const COINGECKO_BASE_URL: string = 'https://api.coingecko.com/api/v3';

export const COINGECKO_TRENDING_URL: string = `${COINGECKO_BASE_URL}/search/trending`;
export const COINGECKO_SEARCH_URL: string = `${COINGECKO_BASE_URL}/search`;
export const COINGECKO_MARKET_CHART_URL = (id: string) => `https://api.coingecko.com/api/v3/coins/${id}/market_chart`;
export const COINGECKO_OHLC_URL = (id: string) => `https://api.coingecko.com/api/v3/coins/${id}/ohlc`;
export const COINGECKO_COIN_URL = (id: string) => `https://api.coingecko.com/api/v3/coins/${id}`;


