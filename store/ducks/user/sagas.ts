import { put, call, takeLatest } from "redux-saga/effects";
import { AuthApi } from "../../../services/api/AuthApi";
import { setLoadingStatus, setUserData } from "./actionCreators";
import { UserActionType } from "./contracts/actionTypes";

export function* fetchUserDataRequest() {
  try {
    const data = yield call(AuthApi.getMe);
    yield put(setUserData(data));
    yield put(setLoadingStatus(true));
  } catch (e) {
    yield put(setLoadingStatus(false));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionType.FETCH_USER_DATA, fetchUserDataRequest);
}
