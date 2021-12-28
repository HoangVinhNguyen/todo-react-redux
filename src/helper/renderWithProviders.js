import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';


const Providers = ({ ui, store }) => {
  return (
    <Provider store={store}>
      {ui}
    </Provider>
  );
};

export const renderWithProviders = (ui, store) => {
  render(Providers({ ui, store }));
}