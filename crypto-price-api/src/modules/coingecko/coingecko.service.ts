import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { Coin } from 'src/models/coin.model';
import { OHLC } from 'src/models/ohlc.model';
import { Price } from 'src/models/price.model';
import { Statistics } from 'src/models/statistics.model';
import { 
    COINGECKO_COIN_URL, 
    COINGECKO_MARKET_CHART_URL, 
    COINGECKO_OHLC_URL, 
    COINGECKO_SEARCH_URL, 
    COINGECKO_TRENDING_URL 
} from '../../config/endpoints';


@Injectable()
export class CoingeckoService {
    constructor(private httpService: HttpService) {}

    async getTrendingCoins(): Promise<Coin[]> {
        const response: AxiosResponse<any> = await firstValueFrom(
            this.httpService.get(COINGECKO_TRENDING_URL)
        );

        return response.data.coins.map((coin: any) => ({
            id: coin.item.id,
            name: coin.item.name,
        }));
    }

    async getCoins(query: string): Promise<Coin[]> {
        const response: AxiosResponse<any> = await firstValueFrom(
            this.httpService.get(`${COINGECKO_SEARCH_URL}?query=${query}`)
        );

        return response.data.coins.map((coin: any) => ({
            id: coin.id,
            name: coin.name,
        }));
    }

    async getCoinMarketChart(id: string, currency: string, days: string): Promise<{ prices: Price[], ohlcs: OHLC[], statistics: Statistics }> {
        const [priceResponse, ohlcResponse, coinResponse]: AxiosResponse[] = await Promise.all([
            firstValueFrom(
                this.httpService.get(COINGECKO_MARKET_CHART_URL(id), { params: { vs_currency: currency, days } })
            ),
            firstValueFrom(
                this.httpService.get(COINGECKO_OHLC_URL(id), { params: { vs_currency: currency, days } })
            ),
            firstValueFrom(
                this.httpService.get(COINGECKO_COIN_URL(id))
            ),
        ]);

        const formattedPriceData: Price[] = priceResponse.data.prices.map((item: any) => ({
            date: item[0],
            price: item[1],
        }));

        const formattedOHLCData: OHLC[] = ohlcResponse.data.map((item: any) => ({
            date: item[0],
            open: item[1],
            high: item[2],
            low: item[3],
            close: item[4],
        }));

        const coinData = coinResponse.data;

        const statistics: Statistics = {
            maxSupply: coinData.market_data.max_supply,
            totalSupply: coinData.market_data.total_supply,
            marketCap: coinData.market_data.market_cap.usd,
            tradingVolume: coinData.market_data.total_volume.usd,
            fdv: coinData.market_data.fully_diluted_valuation.usd,
            circulatingSupply: coinData.market_data.circulating_supply,
        };

        return { 
            ohlcs: formattedOHLCData, 
            prices: formattedPriceData, 
            statistics 
        };
    }
}
