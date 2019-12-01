import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ErrorComponent from './ErrorComponent';
import { shallow } from 'enzyme';

const setup = overridesProps => {
    const props = {
        ...overridesProps,
    };
    const mockStore = configureMockStore();
    const store = mockStore();
    const wrapper = shallow(
        <Provider store={store}>
            <ErrorComponent {...props} />
        </Provider>
    );

    return {
        props,
        wrapper,
    };
};

describe('ErrorComponent', () => {
    it('should render', () => {
        const { wrapper } = setup();
        expect(wrapper.exists()).toBe(true);
    });
});
