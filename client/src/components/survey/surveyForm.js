import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SurveyField from "./surveyField";
import {
  SurveyFormMode,
  updateFormMode,
  updateFormValues,
} from "../../features/surveyFormSlice";

const SurveyForm = () => {
  const { values } = useSelector((state) => state.surveyForm);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: values });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updateFormValues(data));
    dispatch(updateFormMode(SurveyFormMode.REVIEW));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SurveyField
        label="Survey Title"
        hasError={!!errors.title}
        {...register("title", { required: true })}
      />
      <SurveyField
        label="Subject Line"
        hasError={!!errors.subject}
        {...register("subject", { required: true })}
      />
      <SurveyField
        label="Email Body"
        hasError={!!errors.body}
        {...register("body", { required: true })}
      />
      <SurveyField
        label="Recipient List"
        hasError={!!errors.recipients}
        {...register("recipients", { required: true })}
      />
      <Link to="/surveys" className="red btn-flat white-text">
        Cancel
      </Link>
      <button type="submit" className="teal btn-flat right white-text">
        Next
        <i className="material-icons right">done</i>
      </button>
    </form>
  );
};

export default SurveyForm;
