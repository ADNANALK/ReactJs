import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
  },
  reducers: {
    login: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loggedIn = true;
    },
  }
})

export const { login } = userSlice.actions

export const selectIsLoggedIn = state => state.user.loggedIn;

export default userSlice.reducer;