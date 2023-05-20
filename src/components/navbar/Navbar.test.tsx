import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar component', () => {
it('renders the logo', () => {
    render(<Navbar />);
    const logoElement = screen.getByAltText('Logo photo');
    expect(logoElement).toBeInTheDocument();
});

it('renders the user name', () => {
    render(<Navbar />);
    const userNameElement = screen.getByText('Mohamed');
    expect(userNameElement).toBeInTheDocument();
});

});
