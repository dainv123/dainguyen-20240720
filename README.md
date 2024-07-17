## Test Question No. 1

### Introduction

This project is a crypto price tracker application with a frontend built using React and a backend built using NestJS. The application retrieves crypto data from an external API (likely Coingecko) and displays it to the user in a user-friendly interface. The project is containerized using Docker for easy deployment.

### Project Structure

The project consists of two main parts: a frontend application and a backend API.

#### Frontend (`crypto-price-frontend`) Use pattern the presentational and container components

- `models/`: Contains data models used throughout the frontend for representing coins, prices, statistics, etc.
  - `coin.tsx`, `price.tsx`, `statistics.tsx`
- `public/`: Contains static assets used by the React application, such as images, fonts, and potentially an `index.html` file that serves as the entry point for the React application.
- `pages/`: 
  - `Dashboard.tsx`: The main layout component that arranges other components.
- `components/`: Reusable UI components that build the application interface:
  - `Candlestick.tsx`: Visualizes price data as a candlestick chart.
  - `CandlestickChart.tsx`: Manages the overall candlestick chart display.
  - `CandlestickTooltip.tsx`: Displays detailed information on hover over a candlestick.
  - `ChartToggle.tsx`: Allows users to switch between different chart types.
  - `CustomAlert.tsx`: Displays informative alerts or notifications.
  - `CustomLoader.tsx`: Displays a loading indicator while data is being fetched.
  - `Header.tsx`: Renders the application header.
  - `PriceChart.tsx`: Displays the price chart using other components like `Candlestick.tsx`.
  - `PriceTooltip.tsx`: Displays detailed price information on hover.
  - `SearchBox.tsx`: Allows users to search for specific cryptocurrencies.
  - `StatisticsDisplay.tsx`: Displays various statistics for cryptocurrencies.
  - `TimeRangeSelector.tsx`: Allows users to select a specific time range for viewing price data.
- `test/`: Contains unit tests for your React components and utilities.
- `utils/`: Stores utility functions used throughout the frontend application (e.g., data formatting, date manipulation, price calculations).
- `App.tsx`: The root React application component, defining the overall application structure and managing rendering of other components.

#### Backend (`crypto-price-api`)

- `src/config/`: Stores configuration files for your application, such as API endpoints for Coingecko.
- `src/interceptors/`: Contains backend API interceptors for manipulating requests and responses (e.g., error handling).
- `src/models/`: Houses your database entities (models) that represent data structures (e.g., `coin.model.ts`, `ohlc.model.ts`).
- `src/modules/`: Contains feature modules that group related functionalities:
  - `coingecko module`: Handles communication with the Coingecko API.
    - `coingecko.controller.ts`: Defines API endpoints and interacts with `coingecko.service.ts` to retrieve data.
    - `coingecko.service.spec.ts`: Unit tests for the `coingecko.service.ts`.
    - `coingecko.service.ts`: Interacts with the Coingecko API using libraries or making HTTP requests to retrieve and process data.

### Running the application with docker

1. Make sure you have Docker installed and running on your system.
2. Navigate to the project root directory (where this README resides).
3. Build the Docker images:
   ```bash
   docker-compose build
   ```
4. Start the application:
   ```bash
   docker-compose up --build
   ```
##### Now, you can access the application at `http://localhost:80`.
Please note that some laptops may block localhost HTTPS connections due to security settings. It is recommended to navigate to the site using an `incognito window` for the best experience.


### Running the application locally
Each project contains a README file with detailed instructions. Generally, you can follow these steps to run the application:

1. Install all necessary packages: Ensure all dependencies are installed by running `npm install` in each project directory.

2. Start the Frontend: Navigate to the `crypto-price-frontend/` directory and run:
    ```bash
   npm run start
   ```

3. Start the Backend: Navigate to the `crypto-price-api/` directory and run:
    ```bash
   npm run start
   ```

Once both servers are running, you can access the application at `http://localhost:3000/`.


## Test Question No. 2
The function `calculateMaxProfit` has been implemented in `crypto-price-frontend/src/utils/calculate-max-profit.tsx`. Unit tests validating its functionality are located in `crypto-price-frontend/src/test/calculate-max-profit.spec.tsx`. For detailed implementation and testing, please refer to these files.
```js
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
```
