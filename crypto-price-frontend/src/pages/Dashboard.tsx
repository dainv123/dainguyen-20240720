import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import PriceChart from '../components/PriceChart';
import CustomAlert from '../components/CustomAlert';
import ChartToggle from '../components/ChartToggle';
import CustomLoader from '../components/CustomLoader';
import CandlestickChart from '../components/CandlestickChart';
import TimeRangeSelector from '../components/TimeRangeSelector';
import StatisticsDisplay from '../components/StatisticsDisplay';
import CoinResponse from '../models/coin-response';
import Statistics from '../models/statistics';
import Coin from '../models/coin';
import OHLC from '../models/ohlc';
import Price from '../models/price';
import { WEEK } from '../config/time-ranges';
import { PLEASE_SELECT_FIRST_LABEL } from '../config/messages';
import { CRYPTO_COIN_URL, CRYPTO_SEARCH_URL, CRYPTO_TRENDING_URL } from '../config/endpoints';

const Dashboard: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [alertOpen, setAlertOpen] = useState(false);
	const [searchLoading, setSearchLoading] = useState(false);
	const [isPriceChart, setIsPriceChart] = useState(true);
	const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
	const [ohlcData, setOHLCData] = useState<OHLC[]>([]);
	const [priceData, setPriceData] = useState<Price[]>([]);
	const [timeRange, setTimeRange] = useState(WEEK.value);
	const [suggestions, setSuggestions] = useState<Coin[]>([]);
	const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);
	const [statistics, setStatistics] = useState<Statistics>({
		fdv: 0,
		maxSupply: 0,
		marketCap: 0,
		totalSupply: 0,
		tradingVolume: 0,
		circulatingSupply: 0
	});

	useEffect(() => {
		const fetchInitialTrendingCoins = async () => {
			try {
				setSearchLoading(true);
				const response = await axios.get<Coin[]>(CRYPTO_TRENDING_URL);
				setTrendingCoins(response.data);
			} catch (error) {
				showAlert();
			} finally {
				setSearchLoading(false);
			}
		};

		fetchInitialTrendingCoins();
	}, []);

	useEffect(() => {
		if (!selectedCoin) {
			return;
		}

		const fetchCoinDetails = async () => {
			try {
				setLoading(true);

				const response = await axios.get<CoinResponse>(CRYPTO_COIN_URL, {
					params: {
						id: selectedCoin.id,
						days: timeRange,
						currency: 'usd'
					},
				});

				const { prices, ohlcs, statistics } = response.data;

				setOHLCData(ohlcs);
				setPriceData(prices);
				setStatistics(statistics);
			} catch (error) {
				showAlert();
			} finally {
				setLoading(false);
			}
		};

		fetchCoinDetails();
	}, [selectedCoin, timeRange]);

	const handleInputChange = async (input: string) => {
		setSearchLoading(true);

		try {
			const response = await axios.get<Coin[]>(CRYPTO_SEARCH_URL, {
				params: { query: input },
			});

			setSuggestions(response.data);
		} catch (error) {
			showAlert();
		} finally {
			setSearchLoading(false);
		}
	};

	const handleTimeRangeChange = (range: string) => {
		setTimeRange(range);
	};

	const handleSelected = (coin: Coin) => {
		setSelectedCoin(coin);
	};

	const handleCloseAlert = () => {
		setAlertOpen(false);
	};

	const showAlert = () => {
		setAlertOpen(true);
		setTimeout(() => setAlertOpen(false), 4000);
	};

	return (
		<Container>
			<Header />
			<Grid container spacing={3} style={{ marginTop: '1em' }}>
				<Grid item xs={12} md={6}>
					<SearchBox
						loading={searchLoading}
						suggestions={suggestions}
						trendingCoins={trendingCoins}
						onSelected={handleSelected}
						onInputChange={handleInputChange}
					/>
				</Grid>

				<Grid item xs={12} md={6}>
					<TimeRangeSelector value={timeRange} onChange={handleTimeRangeChange} />
				</Grid>

				{selectedCoin ? (
					<>
						<Grid item xs={12}>
							<StatisticsDisplay name={selectedCoin.name} statistics={statistics} />
						</Grid>
						<Grid item xs={12} display={'flex'} justifyContent={'end'}>
							<ChartToggle isPriceChart={isPriceChart} setToggle={setIsPriceChart} />
						</Grid>
						<Grid item xs={12}>
							{isPriceChart ? (
								<PriceChart data={priceData} timeRange={timeRange} />
							) : (
								<CandlestickChart rawData={ohlcData} timeRange={timeRange} />
							)}
						</Grid>
					</>
				) : (
					<Grid item xs={12} textAlign="center">
						{PLEASE_SELECT_FIRST_LABEL}
					</Grid>
				)}

				{loading && <CustomLoader loading={loading} />}

				{alertOpen && <CustomAlert severity="error" onClose={handleCloseAlert} />}
			</Grid>
		</Container>
	);
};

export default Dashboard;
