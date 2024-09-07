import { User } from "../types/types";

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};
