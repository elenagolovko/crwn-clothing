import UserActionsTypes from "./user.actions.types";

export const googleSignInStart = () => ({
  type: UserActionsTypes.GOOGLE_SIGNIN_START
});

export const signInSuccess = user => ({
  type: UserActionsTypes.SIGNIN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionsTypes.SIGNIN_FAILURE,
  payload: error
});

export const emailSignInStart = emailAndPssword => ({
  type: UserActionsTypes.EMAIL_SIGNIN_START,
  payload: emailAndPssword
});

export const checkUserSession = () => ({
  type: UserActionsTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionsTypes.SIGNOUT_START
});

export const signOutSuccess = () => ({
  type: UserActionsTypes.SIGNOUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionsTypes.SIGNOUT_FAILURE,
  payload: error
});

export const signUpStart = signUpData => ({
  type: UserActionsTypes.SIGNUP_START,
  payload: signUpData
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionsTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData }
});

export const signUpFailure = error => ({
  type: UserActionsTypes.SIGNUP_FAILURE,
  payload: error
});
