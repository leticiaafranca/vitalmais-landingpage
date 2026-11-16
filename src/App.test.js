import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

beforeAll(() => { window.scrollTo = jest.fn(); });

test('provides working destinations for main navigation and service discovery', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(within(header).getByRole('link', { name: /VitalMais — página inicial/i })).toHaveAttribute('href', '/');
  const contact = within(header).getByRole('link', { name: 'Contato' });
  expect(contact).toHaveAttribute('href', '/#contato');
  expect(document.getElementById('contato')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Conheça nossos serviços/ })).toHaveAttribute('href', '#servicos');
  expect(screen.queryByText(/xxxx/)).not.toBeInTheDocument();
});

test('exposes menu state and closes it with Escape', () => {
  render(<App />);
  const menu = screen.getByRole('button', { name: 'Abrir menu' });
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(menu).toHaveAttribute('aria-expanded', 'false');
});
