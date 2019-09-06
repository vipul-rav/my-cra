import { actionTypes } from "../../constants";

const config = (state = {}, action) => {

    switch (action.type) {
        case actionTypes.FETCH_CONFIG_SUCCESS:
            return { ...state, envUrl: action.payload };
        case actionTypes.SET_QUERY_PARAMS:
            return {
                ...state,
                ...action.params,
            };
        case actionTypes.FETCH_CONTENT_SUCCESS:
            return { ...state, externalContent: action.payload };
        case actionTypes.FETCH_FETCH_USERS_SUCCESS:
        case actionTypes.FETCH_FETCH_REPO_LIST_SUCCESS:
            return state;
        default:
            return state;
    }
};

export default config;
