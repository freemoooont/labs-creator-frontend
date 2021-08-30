import { Action } from "redux";
import { UserData } from "./state";

export enum UserActionType {
  SET_USER_DATA = "user/SET_USER_DATA",
  SET_LOADING_STATUS = "user/SET_LOADING_STATUS",
  FETCH_USER_DATA = "user/FETCH_USER_DATA",
}

export interface SetUserDataActionInterface extends Action<UserActionType> {
  type: UserActionType.SET_USER_DATA;
  payload: UserData | undefined;
}

export interface FetchUserDataActionInterface extends Action<UserActionType> {
  type: UserActionType.FETCH_USER_DATA;
}

export interface SetLoadingStatusActionInterface
  extends Action<UserActionType> {
  type: UserActionType.SET_LOADING_STATUS;
  payload: boolean;
}
