import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  SurveyFormMode,
  submitSurvey,
  updateFormMode,
} from "../../features/surveyFormSlice";

const SurveyReview = () => {
  const dispatch = useDispatch();
  const { values } = useSelector((state) => state.surveyForm);
  const navigate = useNavigate();

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <div>
          <label>Survey Title</label>
          <div>{values.title}</div>
        </div>
        <div>
          <label>Subject Line</label>
          <div>{values.subject}</div>
        </div>
        <div>
          <label>Email Body</label>
          <div>{values.body}</div>
        </div>
        <div>
          <label>Recipient List</label>
          <div>{values.recipients}</div>
        </div>
      </div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={() => dispatch(updateFormMode(SurveyFormMode.EDIT))}
      >
        Back
      </button>
      <button
        className="teal btn-flat right white-text"
        onClick={() => dispatch(submitSurvey({ values, navigate }))}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

export default SurveyReview;
