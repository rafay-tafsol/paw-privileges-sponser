import classes from "./CircleOTPInput.module.css";

const CircleOTPInput = ({ value, onChange, onKeyDown, id }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      maxLength={1}
      id={id}
      className={classes.otpInput}
    />
  );
};

export default CircleOTPInput;
