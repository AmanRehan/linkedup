import { fetchCount } from "./counterAPI"

const reducers = {
  login: (state, action) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.value = action.payload;
  },
  // decrement: (state) => {
  //   state.value -= 1;
  // },
  // Use the PayloadAction type to declare the contents of `action.payload`
  logout: (state) => {
    state.user = null;
  },
};

const extraReducers = {
  [fetchCount.pending]: state => null,
  [fetchCount.fulfilled]: state => null,
  [fetchCount.rejected]: e => console.error(e)
}

export default reducers;
export {extraReducers}
