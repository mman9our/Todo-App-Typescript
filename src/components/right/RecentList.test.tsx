import { render, screen } from '@testing-library/react';
import RecentList from './RecentList';

describe('RecentList component', () => {
it('renders the recent list header', () => {
    render(<RecentList />);
    const headerElement = screen.getByText('Recent Lists');
    expect(headerElement).toBeInTheDocument();
});

it('renders the list items', () => {
    render(<RecentList />);
    const listItemElements = screen.getAllByTestId('list-item');
    expect(listItemElements.length).toBe(5);
});

});
