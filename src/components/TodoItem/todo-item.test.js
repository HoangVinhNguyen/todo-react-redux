import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import expect from 'expect';
import nock from 'nock';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import TodoItem from '.';
import TopBar from '../TopBar';
import TodoList from '../TodoList';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({})

describe('Todo-item', () => {
    
    it('passes update todo', async () => {
        const view = render(<Provider store={store}> <TodoList /> </Provider>);
        console.log(view.debug());
    });
});

