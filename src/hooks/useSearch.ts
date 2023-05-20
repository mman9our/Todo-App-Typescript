import { useState } from 'react';

export function useSearch(initialValue = ''): [string, (value: string) => void] {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return [searchValue, handleSearch];
}
