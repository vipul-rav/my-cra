import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from './App';
import { shallow } from 'enzyme';

const setup = overridesProps => {
    const props = {
        ...overridesProps,
    };
    const mockStore = configureMockStore();
    const store = mockStore();
    const wrapper = shallow(
        <Provider store={store}>
            <App {...props} />
        </Provider>
    );

    return {
        props,
        wrapper,
    };
};

describe('App render', () => {
    it('should render', () => {
        const { wrapper } = setup();
        expect(wrapper.exists()).toBe(true);
    });
});
