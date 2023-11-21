import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchUser } from "./authSlice";

export const SurveyFormMode = {
  EDIT: "edit",
  REVIEW: "review",
};

const initialState = {
  values: { title: "", subject: "", body: "", recipients: "" },
  mode: SurveyFormMode.EDIT,
};

export const submitSurvey = createAsyncThunk(
  "surveyForm/submitSurvey",
  async ({ values, navigate }, { dispatch }) => {
    await axios.post("/api/surveys", values);
    dispatch(fetchUser());
    navigate("/surveys");
  }
);

export const surveyFormSlice = createSlice({
  name: "surveyForm",
  initialState,
  reducers: {
    updateFormValues: (state, action) => {
      state.values = action.payload;
    },
    updateFormMode: (state, action) => {
      state.mode = action.payload;
    },
    clearFormValues: (state) => {
      state.values = initialState.values;
    },
  },
});

export const { updateFormValues, updateFormMode, clearFormValues } =
  surveyFormSlice.actions;

export default surveyFormSlice.reducer;
