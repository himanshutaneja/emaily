import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const res = await axios.get("/api/current_user");
  return res.data;
});

export const handleToken = createAsyncThunk(
  "auth/handleToken",
  async (token, { dispatch }) => {
    await axios.post("/api/stripe", token);

    dispatch(fetchUser());
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, () => null);
    builder.addCase(
      fetchUser.fulfilled,
      (_state, action) => action.payload || false
    );
  },
});

export default authSlice.reducer;
