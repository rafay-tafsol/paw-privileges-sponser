import React from "react";
import classes from "./StatesCard.module.css";
import { PiCurrencyDollarBold } from "react-icons/pi";

const StatesCard = () => {
  return (
    <div className={classes.states}>
      <div className={classes.dollar}>
        <PiCurrencyDollarBold size={16} color="var(--white-color)" />
      </div>
      <p>$340</p>
      <h5>Total Earning By Basic</h5>
    </div>
  );
};

export default StatesCard;
