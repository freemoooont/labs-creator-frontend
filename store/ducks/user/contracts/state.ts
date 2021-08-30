import { UserType } from "../../../types";

export interface UserData {
  name: string;
  userType: UserType;
  email?: string;
}
export type UserState = {
  isLoaded: boolean;
  data: UserData | null;
};
