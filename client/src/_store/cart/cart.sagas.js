import { takeLatest, all, put, call } from "redux-saga/effects";

import { clearCart } from "./cart.actions";
import UserActionsTypes from "../user/user.actions.types";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionsTypes.SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
