import React from 'react';
import configureMockStore from 'redux-mock-store';
import Sample from './Sample';
import { shallow } from 'enzyme';

const content = {
    ExitText: 'Exit',
    btnContinue: 'Continue',
    homePageText: 'Home Page',
};

const setup = overridesProps => {
    const props = {
        content: content,
        continueClick: jest.fn(),
        getPostList: jest.fn(),
        ...overridesProps,
    };

    const mockStore = configureMockStore();
    const store = mockStore({
        config: {
            externalContent: content,
        },
    });
    const wrapper = shallow(<Sample {...props} store={store} />);

    return {
        props,
        wrapper,
    };
};

describe('Sample container', () => {
    it('should render', () => {
        const { wrapper } = setup();

        expect(wrapper.exists()).toBe(true);
    });
});
