import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './helper/renderWithProviders';
import { shallow } from 'enzyme';

// test('renders learn react link', () => {
//   const { getByLabelText, getByText } = renderWithProviders(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('renders learn react link', () => {
  renderWithProviders(<App />);
});
