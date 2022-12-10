import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../constants';
import { UserData, UserProcessType } from '../../types/types';
import { fetchAuthStatusAction, loginAction, logoutAction } from '../actions/api-actions';

const initialState: UserProcessType = {
  authorizationStatus: AuthStatus.Unknown,
  userData: {} as UserData,
};

const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthStatusAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(fetchAuthStatusAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      });
  },
});

export {userProcess};
