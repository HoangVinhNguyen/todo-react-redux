import { render, RenderOptions } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
//import { store } from '../redux/store';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({todoList:[] })
const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export const renderWithProviders = (ui: React.ReactElement, options?: RenderOptions) => {
  return mount(<Provider store={store}>
    {ui}
  </Provider>);
}