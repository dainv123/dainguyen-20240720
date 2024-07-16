## Test Question No. 1

## Introduction

This project is a crypto price tracker application with a frontend built using React and a backend built using NestJS. The application retrieves crypto data from an external API (likely Coingecko) and displays it to the user in a user-friendly interface. The project is containerized using Docker for easy deployment.

## Project Structure

The project consists of two main parts: a frontend application and a backend API.

### Frontend (`crypto-price-frontend`)

- `models/`: Contains data models used throughout the frontend for representing coins, prices, statistics, etc.
  - `coin.tsx`, `price.tsx`, `statistics.tsx`
- `public/`: Contains static assets used by the React application, such as images, fonts, and potentially an `index.html` file that serves as the entry point for the React application.
- `components/`: Reusable UI components that build the application interface:
  - `Candlestick.tsx`: Visualizes price data as a candlestick chart.
  - `CandlestickChart.tsx`: Manages the overall candlestick chart display.
  - `CandlestickTooltip.tsx`: Displays detailed information on hover over a candlestick.
  - `ChartToggle.tsx` (optional): Allows users to switch between different chart types.
  - `CustomAlert.tsx` (optional): Displays informative alerts or notifications.
  - `CustomLoader.tsx` (optional): Displays a loading indicator while data is being fetched.
  - `Dashboard.tsx`: The main layout component that arranges other components.
  - `Header.tsx`: Renders the application header.
  - `PriceChart.tsx`: Displays the price chart using other components like `Candlestick.tsx`.
  - `PriceTooltip.tsx`: Displays detailed price information on hover.
  - `SearchBox.tsx`: Allows users to search for specific cryptocurrencies.
  - `StatisticsDisplay.tsx`: Displays various statistics for cryptocurrencies.
  - `TimeRangeSelector.tsx`: Allows users to select a specific time range for viewing price data.
- `test/`: Contains unit tests for your React components and utilities.
- `utils/`: Stores utility functions used throughout the frontend application (e.g., data formatting, date manipulation, price calculations).
- `App.tsx`: The root React application component, defining the overall application structure and managing rendering of other components.
- `index.css`: The main stylesheet for the frontend application.

### Backend (`crypto-price-api`)

- `src/config/`: Stores configuration files for your application, such as API endpoints for Coingecko.
- `src/interceptors/`: Contains backend API interceptors for manipulating requests and responses (e.g., error handling).
- `src/models/`: Houses your database entities (models) that represent data structures (e.g., `coin.model.ts`, `ohlc.model.ts`).
- `src/modules/`: Contains feature modules that group related functionalities:
  - `coingecko module`: Handles communication with the Coingecko API.
    - `coingecko.controller.ts`: Defines API endpoints and interacts with `coingecko.service.ts` to retrieve data.
    - `coingecko.service.spec.ts`: Unit tests for the `coingecko.service.ts`.
    - `coingecko.service.ts`: Interacts with the Coingecko API using libraries or making HTTP requests to retrieve and process data.

## Running the application

1. Make sure you have Docker installed and running on your system.
2. Navigate to the project root directory (where this README resides).
3. Build the Docker images:
   ```bash
   docker-compose build
   ```
4. Start the application:
   ```bash
   docker-compose up -d
   ```
### Now, you can access the application at http://localhost:80.


# Test Question No. 2
The function `calculateMaxProfit` has been implemented in `crypto-price-frontend/src/utils/calculate-max-profit.tsx`. Unit tests validating its functionality are located in `crypto-price-frontend/src/test/calculate-max-profit.spec.tsx`. For detailed implementation and testing, please refer to these files.
```js
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
```
