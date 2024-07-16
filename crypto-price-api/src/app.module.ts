import { Module } from '@nestjs/common';
import { CoingeckoService } from './modules/coingecko/coingecko.service';
import { CoingeckoController } from './modules/coingecko/coingecko.controller';
import { HttpModule } from '@nestjs/axios';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@Module({
  imports: [HttpModule],
  controllers: [CoingeckoController],
  providers: [
    CoingeckoService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor
    }
  ]
})
export class AppModule {}
