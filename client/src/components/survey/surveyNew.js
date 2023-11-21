import React, { useEffect } from "react";
import SurveyForm from "./surveyForm";
import { useDispatch, useSelector } from "react-redux";
import {
  SurveyFormMode,
  clearFormValues,
} from "../../features/surveyFormSlice";
import SurveyReview from "./surveyReview";

const SurveyNew = () => {
  const { mode } = useSelector((state) => state.surveyForm);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(clearFormValues());
  }, [dispatch]);
  return (
    <div>
      {mode === SurveyFormMode.EDIT ? <SurveyForm /> : <SurveyReview />}
    </div>
  );
};

export default SurveyNew;
