import reducer from './post';
import * as types from '../../constants/actionTypes';

const initialState = {
    postList: null,
    postDetail: null,
};

const postList = [
    {
        userId: 1,
        id: 1,
        title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit',
    },
];

const postDetails = {
    userId: 1,
    id: 1,
    title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit',
};

describe('post reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(initialState, {})).toEqual({
            postList: null,
            postDetail: null,
        });
    });

    it('should handle FETCH_POSTS_SUCCESS', () => {
        const updateAction = {
            type: types.FETCH_POSTS_SUCCESS,
            payload: [
                {
                    userId: 1,
                    id: 1,
                    title:
                        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                    body: 'quia et suscipit\nsuscipit',
                },
            ],
        };

        const newState = {
            postList: postList,
            postDetail: null,
        };
        expect(reducer(initialState, updateAction)).toEqual(newState);
    });
    it('should handle FETCH_POSTS_DETAILS_SUCCESS', () => {
        const updateAction = {
            type: types.FETCH_POSTS_DETAILS_SUCCESS,
            payload: {
                userId: 1,
                id: 1,
                title:
                    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit',
            },
        };

        const newState = {
            postList: null,
            postDetail: postDetails,
        };
        expect(reducer(initialState, updateAction)).toEqual(newState);
    });
});
