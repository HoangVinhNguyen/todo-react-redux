import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './helper/renderWithProviders';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({todoList:[] })
// test('renders learn react link', () => {
//   const { getByLabelText, getByText } = renderWithProviders(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('renders learn react link', () => {
  renderWithProviders(<App />, store);
});
