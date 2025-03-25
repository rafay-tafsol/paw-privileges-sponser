import Button from "@/component/atoms/Button";
import classes from "./SocialMediaSelect.module.css";
import { RxCross2 } from "react-icons/rx";

const SocialMediaSelect = ({
  inputLabel,
  inputPlaceholder,
  btnLabel,
  label,
  RightBtn,
  btnLeftIcon,
  inputValue,

  errorText,
  setInputValue,
  socialLinks,
  handleAdd,
  handleRemove,
}) => {
  return (
    <div className={classes.socialSelectMain}>
      <div className={classes.socialSelectHead}>
        <label htmlFor={`input${label}`} className={classes.labelText}>
          {inputLabel}
        </label>

        {RightBtn && (
          <Button
            label={btnLabel}
            variant={"outline"}
            onClick={handleAdd}
            leftIcon={btnLeftIcon}
          />
        )}
      </div>

      {/* Input Field */}
      <div className={classes.socialSelectBody}>
        <input
          type="text"
          className="border p-2 rounded w-64"
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {errorText && (
        <p className={`mt-2 ${[classes.errorText].join(" ")}`}>{errorText}</p>
      )}
      {/* Display Added Social Links */}
      <div className={classes.socialLinkList}>
        {socialLinks?.map((platform, index) => (
          <div key={index} className={classes.linkTag}>
            {platform}
            <button
              className={classes.removeBtn}
              onClick={() => handleRemove(platform)}
            >
              <RxCross2 size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSelect;
