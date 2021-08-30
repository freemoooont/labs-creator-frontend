import { UserState } from "./contracts/state";
import {
  FetchUserDataActionInterface,
  SetLoadingStatusActionInterface,
  SetUserDataActionInterface,
  UserActionType,
} from "./contracts/actionTypes";

export const setUserData = (
  payload: UserState["data"]
): SetUserDataActionInterface => ({
  type: UserActionType.SET_USER_DATA,
  payload,
});

export const fetchUserData = (): FetchUserDataActionInterface => ({
  type: UserActionType.FETCH_USER_DATA,
});

export const setLoadingStatus = (
  payload: UserState["isLoaded"]
): SetLoadingStatusActionInterface => ({
  type: UserActionType.SET_LOADING_STATUS,
  payload,
});

export type UserActions =
  | SetUserDataActionInterface
  | FetchUserDataActionInterface
  | SetLoadingStatusActionInterface;
