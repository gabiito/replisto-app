import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "@/models";
import { clearData, persistData } from "@/helpers";

export const EmptyUserState: UserInfo = {
  id: '',
  name: '',
  email: ''
}

export const UserKey = 'user';

function getUserInfo(): UserInfo {
  const user = localStorage.getItem('user') as string;
  if (user) {
    return JSON.parse(user);
  }
  return EmptyUserState;
}


export const userSlice = createSlice({
  name: 'user',
  initialState: getUserInfo(),
  reducers: {
    createUser: (_state, action) => {
      persistData<UserInfo>(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const newState = {...state, ...action.payload};
      persistData<UserInfo>(UserKey, newState);

      return newState;
    },
    resetUser: () => {
      clearData(UserKey);
      return EmptyUserState;
    },
  }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;