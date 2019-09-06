import { isRSAA, RSAA } from "redux-api-middleware";
import  configSelectors  from "../selectors";

const apiUrlMiddleware = store => next => (action) => {
    if (!isRSAA(action)) {
        return next(action);
    }

    const storeState = store.getState();

    const urlSelectors = {
        "apiBaseUrl": configSelectors.apiBaseUrl,
    };

    const endpoint = Object.keys(urlSelectors).reduce(
        (curEndpoint, selectorKey) => curEndpoint.replace(selectorKey, urlSelectors[selectorKey](storeState)),
        action[RSAA].endpoint
    );

    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    return next({
        ...action,
        [RSAA]: {
            ...action[RSAA],
            headers: {
                ...action[RSAA].headers,
                ...headers,
            },
            endpoint,
        },
    });
};

export default apiUrlMiddleware;
