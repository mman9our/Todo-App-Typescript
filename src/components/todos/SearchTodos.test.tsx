import { render, screen, fireEvent } from '@testing-library/react';
import SearchTodos from './SearchTodos';

describe('SearchTodos component', () => {
it('calls the onSearch function with the search value', () => {
    const mockOnSearch = jest.fn();
    render(<SearchTodos onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText('Search for the task');
    fireEvent.change(searchInput, { target: { value: 'example search' } });

    expect(mockOnSearch).toHaveBeenCalledWith('example search');
});

});
