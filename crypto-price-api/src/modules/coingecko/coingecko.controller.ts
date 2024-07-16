import { Controller, Get, Query } from "@nestjs/common";
import { CoingeckoService } from "./coingecko.service";
import { OHLC } from "src/models/ohlc.model";
import { Coin } from "src/models/coin.model";
import { Price } from "src/models/price.model";
import { Statistics } from "src/models/statistics.model";

@Controller('coingecko')
export class CoingeckoController {
    constructor(private readonly coingeckoService: CoingeckoService) { }

    @Get('trending')
    async getTrendingCoins(): Promise<Coin[]> {
        return this.coingeckoService.getTrendingCoins();
    }

    @Get('search')
    async getCoins(@Query('query') query: string): Promise<Coin[]> {
        return this.coingeckoService.getCoins(query);
    }

    @Get('coin')
    async getCoinDetails(
        @Query('id') id: string,
        @Query('currency') currency: string,
        @Query('days') days: string,
    ): Promise<{ prices: Price[], ohlcs: OHLC[], statistics: Statistics }> {
        return this.coingeckoService.getCoinMarketChart(id, currency, days);
    }
}