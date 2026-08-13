// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainZenith title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainZenith/i);
    expect(titleElement).toBeInTheDocument();
});
