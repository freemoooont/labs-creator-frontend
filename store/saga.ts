import { userSaga } from "./ducks/user/sagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([userSaga()]);
}
