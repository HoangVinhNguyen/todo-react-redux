import TopBar from '.';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../helper/renderWithProviders';
import { simulate, mount, shallow } from 'enzyme';
import expect from 'expect'
import sinon from 'sinon';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from '../../App';


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const store = mockStore({ })


//var expect = chai.expect;

describe('Login', () => {

    // it('passes login information', () => {
    //     // GIVEN
    //     const handleLoginButton = jest.fn();
    //     // const handleLoginButton = sinon.spy();
    //     const password = '12345678';
    //     const username = 'vinh';
        
    //     // WHEN
    //     const view = mount(<Provider store={store}> <App/> </Provider>);
    //     const fieldusername = view.find('#username-form');
    //     const fieldpassword = view.find('#password-form');
    //     const button = view.find('#login-button');
    //     fieldusername.simulate('change', { target: { value: username } });
    //     fieldpassword.simulate('change', { target: { value: password } });

    //     // fireEvent.change(fieldusername, { target: { value: username } });
    //     // fireEvent.change(fieldpassword, { target: { value: password } });
    //     //fireEvent.click(button);
    //     //button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    //     //fireEvent.click(screen.getByText(/Login/i));
    //     button.simulate('click');
    //     console.log(view.debug());
    //     //button.props().onClick();
    //     //const spy = jest.spyOn(fieldloginbutton, 'click');
    //     expect(handleLoginButton).toHaveBeenCalled();
    //     //expect(getByTestId('logout-button')).toBeVisible();
    //     //expect(button.exists()).toEqual(true);
    //     // expect(spyOnClick).toHaveBeenCalled();
    //     // expect(props.onClick).toHaveBeenCalled();
    // });

    it('passes login information', async () => {

        const password = '12345678';
        const username = 'vinh';
        let clicked = false;
        render(<Provider store={store}> <TopBar/> </Provider>);
        const fieldusername = screen.getByTestId('username-form');
        const fieldpassword = screen.getByTestId('password-form');
        const button = screen.getByTestId('login-button');
        fireEvent.change(fieldusername, { target: { value: username } });
        fireEvent.change(fieldpassword, { target: { value: password } });
        // fireEvent.click(screen.getByTestId('login-button'));
        //fireEvent.click(button);
        //console.log(view.debug());
        button.addEventListener('click', () => (clicked = true));
        await fireEvent.click(button);
        if (clicked === true) {
            console.log("input was clicked");
          }
        expect(await screen.findByTestId('title-welcome')).toHaveTextContent('Welcome vinh');
    });

    it ('get all', () => {

    });
});

// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import nock from 'nock'
// import expect from 'expect'


// const API_URL = 'http://localhost:8088/todoapp/api'
// const middlewares = [ thunk ]
// const mockStore = configureMockStore(middlewares)

// describe('async actions', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })

//   it('creates AUTH_USER action when user is logged in', () => {
//       var data;
//     nock('http://localhost:8088/todoapp/api')
//       .post('/auth/login')
//       .reply(200, { data: 'Logged in successfully'})

//     const expectedActions = [
//       { type: ['ROLE_USER'] }
//     ]
//     const store = mockStore({ })

//     return store.dispatch(loginUser({username: 'vinh', password: '12345678'}))
//       .then(() => { // return of async actions
//         console.log(data);
//         expect({type: data.data.roles}).toEqual(expectedActions)
//       })
//   })

// })

