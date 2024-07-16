import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';

interface ChartToggleProps {
    isPriceChart: boolean,
    setToggle: (arg: boolean) => void;
}

const ChartToggle: React.FC<ChartToggleProps> = ({ isPriceChart, setToggle }) => {
    return (
        <>
            <Tooltip title="Show Line Chart">
                <IconButton
                    sx={{ marginRight: 1 }}
                    aria-label="show-line-chart"
                    color={isPriceChart ? 'primary' : 'default'}
                    onClick={() => setToggle(true)}
                >
                    <ShowChartIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Show Candlestick Chart">
                <IconButton
                    color={!isPriceChart ? 'primary' : 'default'}
                    aria-label="show-candlestick-chart"
                    onClick={() => setToggle(false)}
                >
                    <BarChartIcon />
                </IconButton>
            </Tooltip>
        </>
    );
};

export default ChartToggle;
