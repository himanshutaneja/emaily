import React from "react";

const SurveyField = React.forwardRef((props, ref) => {
  const { label, hasError, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} {...rest} style={{ marginBottom: "5px" }} />
      {hasError && <div className="red-text">{label} is required</div>}
    </div>
  );
});

SurveyField.displayName = "SurveyField";

export default SurveyField;
