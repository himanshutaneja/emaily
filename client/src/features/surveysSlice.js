import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSurveys = createAsyncThunk(
  "surveys/fetchSurveys",
  async (args, dispatch) => {
    const response = await axios.get("/api/surveys");
    return response.data;
  }
);

const surveySlice = createSlice({
  name: "surveys",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchSurveys.fulfilled,
      (state, action) => action.payload || []
    );
  },
});

export default surveySlice.reducer;
