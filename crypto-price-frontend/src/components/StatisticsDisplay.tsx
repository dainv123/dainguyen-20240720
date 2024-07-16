import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import Statistics from '../models/statistics';
import {
  CIRCULATING_SUPPLY_LABEL,
  FULLY_DILUTED_VALUATION_LABEL,
  MARKET_CAP_LABEL,
  MAX_SUPPLY_LABEL,
  TOTAL_SUPPLY_LABEL,
  TRADING_VOLUME_LABEL,
} from '../config/messages';

interface StatisticsDisplayProps {
  name: string;
  statistics: Statistics;
}

const StatisticsDisplay: React.FC<StatisticsDisplayProps> = ({ name, statistics }) => {
  return (
    <Paper elevation={3} style={{ padding: '1em' }}>
      <Typography variant="h6" gutterBottom style={{ marginBottom: '1em' }}>
        {name} Statistics
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1" color="textSecondary">
            {MARKET_CAP_LABEL}: <strong>${statistics.marketCap?.toLocaleString()}</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textSecondary">
            {FULLY_DILUTED_VALUATION_LABEL}: <strong>${statistics.fdv?.toLocaleString()}</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textSecondary">
            {TRADING_VOLUME_LABEL}: <strong>${statistics.tradingVolume?.toLocaleString()}</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textSecondary">
            {CIRCULATING_SUPPLY_LABEL}: <strong>{statistics.circulatingSupply?.toLocaleString()}</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textSecondary">
            {TOTAL_SUPPLY_LABEL}: <strong>{statistics.totalSupply?.toLocaleString()}</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textSecondary">
            {MAX_SUPPLY_LABEL}: <strong>{statistics.maxSupply?.toLocaleString()}</strong>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StatisticsDisplay;
