import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";
import { SlTarget } from "react-icons/sl";
import { TbTag } from "react-icons/tb";

// will be shift later
export const revenueGraph = [
  {
    title: "Basic",
    amount: "$900",
    type: "basic",
    _id: 1,
  },
  {
    title: "Premium",
    amount: "$1900",
    type: "premium",
    _id: 2,
  },
];

export const offerAnalytics = [
  {
    count: "20",
    title: "Pending Offers",
    percentage: "80",
  },
  {
    count: "17",
    title: "Approved Offers",
    percentage: "40",
  },
  {
    count: "6",
    title: "Rejected Offers",
    percentage: "40",
  },
];

export const totalUserRegisterGraph = [
  {
    title: "Total Sponsors",
    type: "basic",
    _id: 1,
  },
  {
    title: "Total Breeders",
    type: "premium",
    _id: 2,
  },
];

// will be shift later

// export const revenueGraph = [
//     {
//         title:"Basic",
//         amount:"$900",
//         type:"basic",
//         _id:1
//     },
//     {
//         title:"Premium",
//         amount:"$1900",
//         type:"premium",
//         _id:2
//     },
// ]

export const categoryDetails = [
  {
    _id: "1",
    title: "Grooming",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "active",
  },
  {
    _id: "2",
    title: "Training",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "active",
  },
  {
    _id: "3",
    title: "Health & Wellness",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "inactive",
  },
  {
    _id: "4",
    title: "Food & Nutrition",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "active",
  },
  {
    _id: "5",
    title: "Toys & Accessories",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "inactive",
  },
  {
    _id: "6",
    title: "Adoption",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "active",
  },
  {
    _id: "7",
    title: "Pet Insurance",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "active",
  },
  {
    _id: "8",
    title: "Boarding & Daycare",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "inactive",
  },
  {
    _id: "9",
    title: "Veterinary Services",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "active",
  },
  {
    _id: "10",
    title: "Pet Training",
    createdAt: "2025-02-28T12:00:00.000Z",
    status: "inactive",
  },
];

export const notificationsData = [
  {
    title: "Notification Title 1",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "5h",
    _id: 1,
  },
  {
    title: "Notification Title 2",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "4h",
    _id: 2,
  },
  {
    title: "Notification Title 3",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "3h",
    _id: 3,
  },
  {
    title: "Notification Title 4",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "2h",
    _id: 4,
  },
  {
    title: "Notification Title 5",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "1h",
    _id: 5,
  },
  {
    title: "Notification Title 6",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "30m",
    _id: 6,
  },
  {
    title: "Notification Title 7",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "15m",
    _id: 7,
  },
  {
    title: "Notification Title 8",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "10m",
    _id: 8,
  },
  {
    title: "Notification Title 9",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "5m",
    _id: 9,
  },
  {
    title: "Notification Title 10",
    description: "Lorem ipsum dolor sit amet.",
    createdAt: "1m",
    _id: 10,
  },
];

export const availablePuppies = [
  { image: "/images/app-images/svg/availablePuppy1.svg" },
  { image: "/images/app-images/svg/availablePuppy2.svg" },
  { image: "/images/app-images/svg/availablePuppy3.svg" },
];

export const offersCardData = [
  {
    title: "Free Grooming Session For Breeders",
    location: "Saint Barthélemy",
    image: "/images/app-images/svg/offersImage.svg",
    availableDate: "10/12/25",
  },
  {
    title: "Free Grooming Session For Breeders",
    location: "Saint Barthélemy",
    image: "/images/app-images/svg/offersImage.svg",
    availableDate: "10/12/25",
  },
  {
    title: "Free Grooming Session For Breeders",
    location: "Saint Barthélemy",
    image: "/images/app-images/svg/offersImage.svg",
    availableDate: "10/12/25",
  },
];

export const offersData = [
  {
    headerImg: [
      "/images/app-images/png/cover1.png",
      "/images/app-images/png/cover2.png",
    ],
  },
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
];
