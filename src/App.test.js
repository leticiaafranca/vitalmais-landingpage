import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders Centro Médico VitalMais header', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(within(header).getByRole('heading', { name: /Centro Médico VitalMais/i, level: 2 })).toBeInTheDocument();
});
