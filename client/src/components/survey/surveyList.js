import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../../features/surveysSlice";

const SurveyList = () => {
  const dispatch = useDispatch();
  const surveys = useSelector((state) => state.surveys);
  useEffect(() => {
    dispatch(fetchSurveys());
  }, [dispatch]);

  return (
    <ul>
      {surveys.map(({ _id, title, body, dateSent, yes, no }) => {
        return (
          <div className="card darken-1" key={_id}>
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{body}</p>
              <p className="right">
                Sent on: {new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {yes}</a>
              <a>No: {no}</a>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default SurveyList;
