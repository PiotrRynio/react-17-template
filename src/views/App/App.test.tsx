import { render, screen } from '@testing-library/react';
import App from './App';

describe(`<App>`, () => {
  it('renders learn react link', () => {
    // when
    render(<App />);

    // then
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
