import { createSlice } from "@reduxjs/toolkit";

interface IMainState {
  search: boolean;
  add: boolean;
  toggle: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  val: any;
}

const initialState: IMainState = {
  search: false,
  add: false,
  toggle: false,
  val: {},
};

export const userSlice = createSlice({
  name: "Initial",
  initialState,
  reducers: {
    handleInitialSearch: (state) => {
      state.search = true;
    },
    handleInitialSearchStop: (state) => {
      state.search = false;
    },
    handleAddModalOpen: (state) => {
      state.add = true;
    },
    handleAddModalClose: (state) => {
      state.add = false;
    },
    handleToggle: (state) => {
      state.toggle = !state.toggle;
    },
    rowValue: (state, action) => {
      state.val = action.payload; // Updating Redux state with the rowData
    },
  },
});

export const {
  handleInitialSearch,
  handleInitialSearchStop,
  handleAddModalOpen,
  handleAddModalClose,
  handleToggle,
  rowValue,
} = userSlice.actions;

export default userSlice.reducer;
