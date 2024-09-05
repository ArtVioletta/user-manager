import { createSlice,  } from '@reduxjs/toolkit';

import { fetchUsers } from './thunks';
import { initialState } from './usersTypes';
import { setFilter as setFilterReducer } from './usersReducers';

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: setFilterReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch users';
      });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer; 

