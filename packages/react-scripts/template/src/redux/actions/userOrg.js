import { actionTypes, urls } from "../../constants";
import { RSAA, getJSON } from "redux-api-middleware";

export const getUserOrgList = () => ({
    [RSAA]: {
        endpoint: urls.GET_USER_ORG_LIST,
        method: "GET",
        types: [
            {
                type: actionTypes.FETCH_USERS,
                meta: {
                    loading: true,
                },
            },
            {
                type: actionTypes.FETCH_USERS_SUCCESS,
                payload: (_action, _state, res) =>
                    getJSON(res).then((json) => {
                        res.json = json;
                        return json;
                    }),
                meta: (_action, _state, _res) => {
                    return ({ nextAction: getUserOrgRepo(), loading: true });
                },
            },
            {
                type: actionTypes.FETCH_USERS_FAILED,
            },
        ],
    },
});

export const getUserOrgRepo = () => ({
    [RSAA]: {
        endpoint: urls.GET_USER_REPO,
        method: "GET",
        types: [
            {
                type: actionTypes.FETCH_REPO_LIST,
                meta: {
                    loading: true,
                },
            },
            {
                type: actionTypes.FETCH_REPO_LIST_SUCCESS,
                meta: {
                    loading: false,
                },
            },
            {
                type: actionTypes.FETCH_REPO_LIST_FAILED,
            },
        ],
    },
});