import { UserState } from "./contracts/state";
import produce, { Draft } from "immer";
import { UserActions } from "./actionCreators";
import { UserActionType } from "./contracts/actionTypes";

const initialUserState: UserState = {
  data: null,
  isLoaded: false,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
      case UserActionType.SET_USER_DATA:
        console.log(draft.data);
        draft.data = action.payload;
        draft.isLoaded = true;
        break;

      default:
        break;
    }
  },
  initialUserState
);
