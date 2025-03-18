// import { MdOutlineLayers } from "react-icons/md";
// import classes from "./PaymentCard.module.css";

// const PaymentCard = ({ data }) => {
//   return (
//     <div className={classes.PaymentCardMain}>
//       <div className={classes.cardTop}>
//         <div className={classes.topLeft}>
//           <span>
//             <MdOutlineLayers color={"var(--white-color)"} />
//           </span>
//           <p>{data?.title || "Invoice Overview"} </p>
//         </div>
//       </div>
//       <div className={classes.cardBottom}>
//         <span>
//           <h4>Invoice ID</h4>
//           <p>INV-001234</p>
//         </span>
//         <span>
//           <h4>Date Issued</h4>
//           <p>Jan 15, 2025</p>
//         </span>
//         <span>
//           <h4>Status</h4>
//           <p>Successful</p>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default PaymentCard;

import { MdOutlineLayers } from "react-icons/md";
import classes from "./PaymentCard.module.css";
import ShowStatus from "@/component/atoms/ShowStatus";

const PaymentCard = ({ data }) => {
  const isInvoice = data.invoiceData;
  const details = data.invoiceData || data.subscriptionData;
  const detailValues = details ? Object.values(details) : [];

  return (
    <div className={classes.PaymentCardMain}>
      <div className={classes.cardTop}>
        <div className={classes.topLeft}>
          <span>
            <MdOutlineLayers color={"var(--white-color)"} />
          </span>
          <p>{data?.title || "Details"}</p>
        </div>
      </div>
      <div className={classes.cardBottom}>
        {detailValues.map((item, index) => (
          <span key={index}>
            <h4>{item.key1}</h4>
            {isInvoice && index === detailValues.length - 1 ? (
              <ShowStatus status={item.value1} />
            ) : (
              <p>{item.value1}</p>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PaymentCard;
