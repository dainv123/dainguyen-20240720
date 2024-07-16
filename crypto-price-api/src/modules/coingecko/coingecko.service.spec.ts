import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { CoingeckoService } from './coingecko.service';

describe('CoingeckoService', () => {
    let service: CoingeckoService;
    let httpService: HttpService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CoingeckoService,
                {
                    provide: HttpService,
                    useValue: {
                        get: jest.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<CoingeckoService>(CoingeckoService);
        httpService = module.get<HttpService>(HttpService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should get trending coins', async () => {
        const result = { data: { coins: [{ item: { id: '1', name: 'Bitcoin' } }] } };
        jest.spyOn(httpService, 'get').mockReturnValue(of(result as AxiosResponse));
        expect(await service.getTrendingCoins()).toEqual([{ id: '1', name: 'Bitcoin' }]);
    });

    it('should get coins by query', async () => {
        const result = { data: { coins: [{ id: '1', name: 'Bitcoin' }] } };
        jest.spyOn(httpService, 'get').mockReturnValue(of(result as AxiosResponse));
        expect(await service.getCoins('bitcoin')).toEqual([{ id: '1', name: 'Bitcoin' }]);
    });
});
