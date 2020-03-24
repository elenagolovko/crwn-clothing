import UserActionsTypes from "./user.actions.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionsTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionsTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionsTypes.SIGNIN_FAILURE:
    case UserActionsTypes.SIGNOUT_FAILURE:
    case UserActionsTypes.SIGNUP_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
