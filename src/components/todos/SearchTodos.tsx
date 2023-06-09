import {  ChangeEvent } from 'react';
import { useSearch } from '../../hooks/useSearch';
import './taskstable.css';

interface SearchTodosProps {
  onSearch: (value: string) => void;
}

function SearchTodos({ onSearch }: SearchTodosProps) {
  const [searchValue, handleSearch] = useSearch('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleSearch(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <span className="material-symbols-sharp">search</span>
      <input
        id="searchbox"
        type="search"
        placeholder="Search for the task"
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchTodos;
