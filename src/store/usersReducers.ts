import { PayloadAction } from '@reduxjs/toolkit';
import { UsersState } from './usersTypes';
export const setFilter = (state: UsersState, action: PayloadAction<{ field: keyof UsersState['filters']; value: string }>) => {
  state.filters[action.payload.field] = action.payload.value;
};