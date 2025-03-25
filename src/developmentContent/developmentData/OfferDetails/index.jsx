import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";
import { SlTarget } from "react-icons/sl";
import { TbTag } from "react-icons/tb";

export const offersDetailData = {
  headerImg: [
    "/Images/app-images/png/cover1.png",
    "/Images/app-images/png/cover2.png",
  ],

  offerDetail: [
    {
      title: "Target Audience",
      icon: <SlTarget size={18} color="var(--main-color)" />,
      key: "Target Audience",
      value: "Dog Breeder",
    },
    {
      title: "Offer Date",
      icon: <LuCalendarDays size={18} color="var(--main-color)" />,
      key: "Start Date",
      value: "10/1/25",
      additionalIcon: <LuCalendarDays size={18} color="var(--main-color)" />,
      additionalKey: "End Date",
      additionalValue: "10/2/25",
    },
    {
      title: "Offer Type",
      icon: <TbTag size={18} color="var(--main-color)" />,
      key: "Offer Type",
      value: "Online",
      additionalIcon: (
        <HiOutlineLocationMarker size={18} color="var(--main-color)" />
      ),
      additionalKey: "Website Link",
      additionalValue: "www.website.com",
    },
    {
      title: "Discount",
      icon: <LuCalendarDays size={18} color="var(--main-color)" />,
      key: "Date",
      value: "10/4/25",
      additionalValue: "10%",
    },
  ],
};
