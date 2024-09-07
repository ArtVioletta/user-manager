import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchUsers } from "./thunks";
import { initialState, UsersState } from "./usersTypes";
import { User } from "../types/types";

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof UsersState["filters"];
        value: string;
      }>
    ) => {
      state.filters[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
