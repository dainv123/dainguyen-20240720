import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import Coin from '../models/coin';
import debounce from '../utils/debounce';
import { SEARCH_CRYPTOCURRENCY_LABEL } from '../config/messages';

interface SearchBoxProps {
  loading: boolean,
  suggestions: Coin[];
  trendingCoins: Coin[];
  onSelected: (coin: Coin) => void;
  onInputChange: (input: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ trendingCoins, suggestions, loading, onSelected, onInputChange }) => {
  const handleSelected = (event: React.ChangeEvent<{}>, value: Coin | null) => {
    if (value) {
      onSelected(value);
    }
  };

  const handleInputChange = (value: string) => {
    onInputChange(value);
  };

  const debouncedInputHandler = debounce((event: React.ChangeEvent<{}>, value: string) => {
    handleInputChange(value);
  }, 400);

  return (
    <Autocomplete
      loading={loading}
      options={suggestions.length > 0 ? suggestions : trendingCoins}
      getOptionKey={(option: Coin) => option.id}
      getOptionLabel={(option: Coin) => option.name}
      onChange={handleSelected}
      onInputChange={debouncedInputHandler}
      isOptionEqualToValue={(option: Coin, value: Coin | null) => option.id === value?.id}
      renderInput={(params) => <TextField {...params} label={SEARCH_CRYPTOCURRENCY_LABEL} />}
    />
  );
};

export default SearchBox;
