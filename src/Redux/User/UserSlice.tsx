// example:
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserObject } from "../../Models/User";
interface UserState extends UserObject {
  created: any;
  email: string | null;
  devices: []
  };

const initialState = {
  notifications: {},
  data: {
    created: null,
    uid: "",
    name: null,
    firstname: null,
    lastname: null,
    email: null,
    devices: []
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    formInitialize: (state, action: PayloadAction<{ form: object }>) => { },
    userUpdate:(
      state,
      action: PayloadAction<{}>) => {
      },
  },
});

//export actions
export { };
export const { } = userSlice.actions;

export default userSlice.reducer;
