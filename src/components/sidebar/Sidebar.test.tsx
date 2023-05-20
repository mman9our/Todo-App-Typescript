import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
it('renders the sidebar links', () => {
    render(<Sidebar />);
    const sidebarLinkElements = screen.getAllByRole('link');
    expect(sidebarLinkElements.length).toBe(6);
});

it('renders the updates section', () => {
    render(<Sidebar />);
    const updatesSectionElement = screen.getByText('Updates Avilable');
    expect(updatesSectionElement).toBeInTheDocument();

});
    
});
