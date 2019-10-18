import { actionTypes } from '../../constants';
const initialState = {
    postList: null,
    postDetail: null,
};

const post = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_DETAILS:
            return { ...state, postList: action.payload };
        case actionTypes.FETCH_POSTS_DETAILS_SUCCESS:
            return { ...state, postDetail: action.payload };
        default:
            return state;
    }
};

export default post;