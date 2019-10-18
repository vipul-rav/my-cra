import { actionTypes } from '../../constants';

export const navigateToNextScreen = nextScreen => ({
    type: actionTypes.REDIRECT_SCREEN,
    path: nextScreen,
});
