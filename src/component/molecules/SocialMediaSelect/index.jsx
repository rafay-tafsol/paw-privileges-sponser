import Button from "@/component/atoms/Button";
import classes from "./SocialMediaSelect.module.css";
import { RxCross2 } from "react-icons/rx";
import { MdAdd } from "react-icons/md";
import Input from "@/component/atoms/Input/Input";
import { RiAttachment2 } from "react-icons/ri";
import { mergeClass } from "@/resources/utils/helper";

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
  labelBtnText,
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
            variant={"outlined"}
            onClick={handleAdd}
            className={classes.btnLabel}
            leftIcon={<MdAdd size={24} />}
          />
        )}
      </div>

      {/* Input Field */}
      <div className={classes.socialSelectBody}>
        <div
          className={mergeClass("border p-2 rounded w-64", classes.socialInput)}
        >
          <RiAttachment2 color={"var(--Mine-Shaft-500)"} />
          <input
            type="text"
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
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
