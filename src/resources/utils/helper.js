// import CryptoJS from "crypto-js";

// import axios from "axios";
// import { toast } from "react-toastify";
// // import { apiHeader } from "../../config/apiUrl";
// import { Patch, Post } from "@/interceptor/axios-functions";
// import { config } from "@/config";

// export const API_URL = config.apiBaseUrl;

// // export const downloadFileUrl =
// //   "https://www.dropbox.com/scl/fi/fvfz25arw0vq99xis2v9g/AthleteRaceINFO.pdf?rlkey=2dzbihw3uupnw15fl0ddsvfjd&e=1&dl=0";
// // live 2w3222
// export const S3_URL = "";
// // 00
// export const baseURL = (link) => `${API_URL}/api/v1/${link}`;
// export const mediaUrl = (url) => `${S3_URL}/${url}`;
// export const imageUrl = (url) => {
//   if (!url) return "";

//   if (url.startsWith("/")) return url;

//   const result = url.indexOf("http");

//   const imageRenderUrl =
//     result === -1 ? `${API_URL}/api/v1/images/${url}` : url;

//   return imageRenderUrl;
// };

// export const mergeClass = (...classes) => {
//   return classes.join(" ");
// };

// export const getFormattedPrice = (price, currency = "R") => {
//   return `${currency}${parseFloat(price).toFixed(2)}`;
// };

// export function getLastSegment(url) {
//   // Remove trailing slashes if there are any
//   url = url.replace(/\/+$/, "");

//   // Get the last segment after the last /
//   var segments = url.split("/");
//   return segments[segments.length - 1];
// }

// export const uploadToPresignedUrl = async (
//   presignedUrl = "",
//   selectedFile = null,
//   setUploadProgress = () => {}
// ) => {
//   try {
//     return await axios.put(presignedUrl, selectedFile, {
//       headers: {
//         "Content-Type": "video",
//       },

//       onUploadProgress: (data) => {
//         const progress = Math.round((100 * data.loaded) / data.total);

//         setUploadProgress((prev) => (prev >= progress ? prev : progress));
//       },
//     });
//   } catch (error) {
//     return null;
//   }
// };

// export const handleEncrypt = (message) => {
//   const encrypted = CryptoJS.AES.encrypt(
//     message,
//     ACCESS_TOKEN_SECRET
//   ).toString();
//   return encrypted;
// };

// export const getImageResolutionMessage = ({
//   lWidth,
//   lHeight,
//   rWidth,
//   rHeight,
// }) => {
//   return toast.warn(
//     `Image resolution if only ${lWidth}x${lHeight} pixels. For best quality print, we recommend at least ${rWidth}x${rHeight} pixels.`
//   );
// };

// export const handleDecrypt = (encryptedMessage) => {
//   if (encryptedMessage) {
//     const decrypted = CryptoJS.AES.decrypt(
//       encryptedMessage,
//       ACCESS_TOKEN_SECRET
//     ).toString(CryptoJS.enc.Utf8);
//     return decrypted;
//   }
// };

// const ACCESS_TOKEN_SECRET = "t2qckOEgV88Gp";

// export const uploadImages = async (images, token) => {
//   if (!images.length) return null;
//   const formData = new FormData();
//   images.forEach((image) => {
//     formData.append("photos", image);
//   });

//   const res = await Post(
//     baseURL("media/upload"),
//     formData,
//     apiHeader(token, true)
//   );

//   if (res) {
//     return res.data?.data?.photos?.map((item) => item?.key);
//   }

//   return null;
// };

// export const uploadImagesHelper = async ({
//   images,
//   setIsLoading,
//   setImages,
//   token,
// }) => {
//   if (images.length === 0) return;
//   setIsLoading(true);
//   uploadImages(images, token)
//     .then((res) => {
//       if (res) {
//         setImages((prev) => [...prev, ...res]);
//       }
//       setIsLoading(false);
//     })
//     .finally(() => {
//       setIsLoading(false);
//     });
// };

// export const deleteMedia = async ({
//   slug,
//   key,
//   setIsLoading,
//   token,
//   setImages,
//   entity,
// }) => {
//   const url = baseURL("media/delete");
//   const params = { slug: slug, key, type: "image", entity };
//   setIsLoading(true);
//   const res = await Patch(url, params, apiHeader(token));
//   if (res) {
//     setImages((prev) => prev.filter((item) => item !== key));
//   }
//   setIsLoading(false);
// };

// export const formRegEx = /([a-z])([A-Z])/g;
// export const formRegExReplacer = "$1 $2";
// export const capitalizeEachWord = (str) => {
//   return str.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
// };
// export const getFormattedParams = (label) =>
//   capitalizeEachWord(label.replace(formRegEx, formRegExReplacer));

// export const validateParams = (params, specialMessages, skips = []) => {
//   for (let key in params) {
//     if (skips.includes(key)) continue;

//     // special cases
//     if (specialMessages && specialMessages[key]) {
//       if (specialMessages[key].condition) {
//         toast.warn(specialMessages[key].message);
//         return false;
//       }
//     }

//     if (!!!params[key]) {
//       toast.warn(`${getFormattedParams(key)} is required.`);
//       return false;
//     }

//     if (Array.isArray(params[key])) {
//       // if 0 length
//       if (params[key].length === 0) {
//         toast.warn(`Add at least one ${getFormattedParams(key)}`);
//         return false;
//       }

//       // if array and contains empty string
//       if (params[key].some((item) => item === "")) {
//         toast.warn(`Add valid ${getFormattedParams(key)}`);
//         return false;
//       }

//       // validate array values
//       for (let key2 in params[key]) {
//         if (params[key][key2]) {
//           const isValid = validateParams(params[key][key2], specialMessages);
//           if (!isValid) return false;
//         }
//       }
//     }
//   }

//   return true;
// };

// export const handleCreateStringifyParams = (params, stringifyFields) => {
//   const newParams = { ...params };
//   for (let key in newParams) {
//     if (stringifyFields.includes(key)) {
//       newParams[key] = JSON.stringify(newParams[key]);
//     }
//   }

//   return newParams;
// };

// // get filtered object, only remove the given keys from the object
// export const getFilteredObjectRemove = (object, keys) => {
//   let filteredObject = { ...object };
//   keys.forEach((key) => {
//     delete filteredObject[key];
//   });
//   return filteredObject;
// };

// export const unWantedKeys = [
//   "_id",
//   "__v",
//   "updatedAt",
//   "createdAt",
//   "__comment",
//   "_comment",
//   "updatedAt",
//   "status",
// ];

// export const getReadableName = (name) => {
//   if (name === "cms") return "CMS";

//   return name;
// };

// // check depth of object
// export const getObjectDepth = (object) => {
//   let level = 1;
//   for (let key in object) {
//     if (!object.hasOwnProperty(key) || typeof object[key] !== "object") {
//       continue;
//     }
//     level += getObjectDepth(object[key]);
//   }
//   return level;
// };

// export const returnKeyEmptyAsPerType = (item) => {
//   if (typeof item === "object") {
//     if (Array.isArray(item)) {
//       return [];
//     } else {
//       return returnFillObjectToEmptyWithSameKey(item);
//     }
//   } else if (typeof item === "string") {
//     return "";
//   }
// };

// export const returnFillObjectToEmptyWithSameKey = (object) => {
//   let newObject = {};
//   Object.keys(object).forEach((key) => {
//     if (typeof object[key] === "object") {
//       newObject[key] = returnFillObjectToEmptyWithSameKey(object[key]);
//     } else if (typeof object[key] === "string") {
//       newObject[key] = "";
//     }
//   });
//   return newObject;
// };

// export const postVideoToS3 = async ({ video, url, setVideoProgress }) => {
//   await axios
//     .put(url, video, {
//       headers: {
//         "Content-Type": video.type,
//       },
//       onUploadProgress: (data) => {
//         setVideoProgress(Math.round((100 * data.loaded) / data.total));
//       },
//     })
//     .then(() => {
//       // toast.success("Video updated successfully.");
//       return true;
//     })
//     .catch(async (e) => {
//       console.log("error in uploading video => ", e);
//       toast.warn("Something went wrong. Please try again later.");
//       return false;
//     })
//     .finally(() => {
//       setVideoProgress(0);
//     });
// };

// export const getNestedObject = (obj = {}, nestedKey = "") => {
//   const keys = nestedKey.split(".");
//   const value = keys.reduce((acc, currKey) => acc && acc[currKey], obj);
//   return value;
// };
// export const apiHeader = (token, isFormData) => {
//   if (token && !isFormData) {
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     };
//   }
//   if (token && isFormData) {
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     };
//   }
//   if (!token && !isFormData) {
//     return {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//   }

//   if (!token && isFormData) {
//     return {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };
//   }
// };

// export const validateEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// export const CreateFormData = (data) => {
//   const formData = new FormData();
//   for (let key in data) {
//     if (Array.isArray(data[key])) {
//       for (let d in data[key]) {
//         if (typeof data[key][d] == "string") {
//           formData.append(key, data[key][d]);
//         } else if (
//           data[key][d] instanceof File ||
//           data[key][d] instanceof Date
//         ) {
//           formData.append(key, data[key][d]);
//         } else {
//           formData.append(key, JSON.stringify(data[key][d]));
//         }
//       }
//     } else if (typeof data[key] == "object") {
//       if (data[key] instanceof File) {
//         formData.append(key, data[key]);
//       } else {
//         formData.append(key, JSON.stringify(data[key]));
//       }
//     } else {
//       formData.append(key, data[key]);
//     }
//   }
//   return formData;
// };

// export const firebaseVapidObject = {
//   vapidKey: "",
// };

// export const capitalizeFirstLetter = (l) => {
//   if (typeof l !== "string" || l.length === 0) {
//     return "";
//   }
//   return l.charAt(0).toUpperCase() + l.slice(1);
// };

// export const FORM_REG_EX = /([a-z])([A-Z])/g;
// export const FORM_REG_EX_REPLACER = "$1 $2";

// export const NUMBER_REG_EX = /[^0-9]+/g;
// export const DECIMAL_REG_EX = /^\d+(\.\d{0,2})?$/;
// export const EMAIL_REG_EX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// export const PHONE_REG_EX = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
// export const URL_REG_EX = /^(http|https):\/\/[^ "]+$/;

import CryptoJS from "crypto-js";

import { Patch, Post } from "@/interceptor/axios-functions";
import axios from "axios";
import { toast } from "react-toastify";
import { config } from "@/config";

export const API_URL = config.apiBaseUrl;
export const S3_URL = config.awsBaseUrl;

export const baseURL = (link) => `${API_URL}/api/v1/${link}`;
export const mediaUrl = (url) => {
  if (!url) return "";

  if (url.startsWith("/")) return url;

  const result = url.indexOf("http");

  const imageRenderUrl = result === -1 ? `${S3_URL}/${url}` : url;

  return imageRenderUrl;
};

export const mergeClass = (...classes) => {
  return classes.join(" ");
};

export const getFormattedPrice = (price, currency = "$") => {
  return `${currency}${parseFloat(price).toFixed(2)}`;
};

export function getLastSegment(url) {
  // Remove trailing slashes if there are any
  url = url.replace(/\/+$/, "");

  // Get the last segment after the last /
  var segments = url.split("/");
  return segments[segments.length - 1];
}

export const uploadToPresignedUrl = async (
  presignedUrl = "",
  selectedFile = null,
  setUploadProgress = () => {}
) => {
  try {
    return await axios.put(presignedUrl, selectedFile, {
      headers: {
        "Content-Type": "video",
      },

      onUploadProgress: (data) => {
        const progress = Math.round((100 * data.loaded) / data.total);

        setUploadProgress((prev) => (prev >= progress ? prev : progress));
      },
    });
  } catch (error) {
    return null;
  }
};

export const handleEncrypt = (message) => {
  const encrypted = CryptoJS.AES.encrypt(
    message,
    ACCESS_TOKEN_SECRET
  ).toString();
  return encrypted;
};

export const getImageResolutionMessage = ({
  lWidth,
  lHeight,
  rWidth,
  rHeight,
}) => {
  return toast.warn(
    `Image resolution if only ${lWidth}x${lHeight} pixels. For best quality print, we recommend at least ${rWidth}x${rHeight} pixels.`
  );
};

export const handleDecrypt = (encryptedMessage) => {
  if (encryptedMessage) {
    const decrypted = CryptoJS.AES.decrypt(
      encryptedMessage,
      ACCESS_TOKEN_SECRET
    ).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }
};

const ACCESS_TOKEN_SECRET = "t2qckOEgV88Gp";

export const deleteMedia = async ({
  slug,
  key,
  setIsLoading,
  token,
  setImages,
  entity,
}) => {
  const url = baseURL("media/delete");
  const params = { slug: slug, key, type: "image", entity };
  setIsLoading(true);
  const res = await Patch(url, params, apiHeader(token));
  if (res) {
    setImages((prev) => prev.filter((item) => item !== key));
  }
  setIsLoading(false);
};

export const formRegEx = /([a-z])([A-Z])/g;
export const formRegExReplacer = "$1 $2";
export const capitalizeEachWord = (str) => {
  return str.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};

export const getFormattedParams = (label) =>
  capitalizeEachWord(label.replace(formRegEx, formRegExReplacer));

export const validateParams = (params, specialMessages, skips = []) => {
  for (let key in params) {
    if (skips.includes(key)) continue;

    // special cases
    if (specialMessages && specialMessages[key]) {
      if (specialMessages[key].condition) {
        toast.warn(specialMessages[key].message);
        return false;
      }
    }

    if (!!!params[key]) {
      toast.warn(`${getFormattedParams(key)} is required.`);
      return false;
    }

    if (Array.isArray(params[key])) {
      // if 0 length
      if (params[key].length === 0) {
        toast.warn(`Add at least one ${getFormattedParams(key)}`);
        return false;
      }

      // if array and contains empty string
      if (params[key].some((item) => item === "")) {
        toast.warn(`Add valid ${getFormattedParams(key)}`);
        return false;
      }

      // validate array values
      for (let key2 in params[key]) {
        if (params[key][key2]) {
          const isValid = validateParams(params[key][key2], specialMessages);
          if (!isValid) return false;
        }
      }
    }
  }

  return true;
};

export const falseValues = [
  false,
  "false",
  0,
  "0",
  null,
  "null",
  "",
  undefined,
  "undefined",
];

export const handleCreateStringifyParams = (params, stringifyFields) => {
  const newParams = { ...params };
  for (let key in newParams) {
    if (stringifyFields.includes(key)) {
      newParams[key] = JSON.stringify(newParams[key]);
    }
  }

  return newParams;
};

// get filtered object, only remove the given keys from the object
export const getFilteredObjectRemove = (object, keys) => {
  let filteredObject = { ...object };
  keys.forEach((key) => {
    delete filteredObject[key];
  });
  return filteredObject;
};

export const unWantedKeys = [
  "_id",
  "__v",
  "updatedAt",
  "createdAt",
  "__comment",
  "_comment",
  "updatedAt",
  "status",
];

export const getReadableName = (name) => {
  if (name === "cms") return "CMS";

  return name;
};

// check depth of object
export const getObjectDepth = (object) => {
  let level = 1;
  for (let key in object) {
    if (!object.hasOwnProperty(key) || typeof object[key] !== "object") {
      continue;
    }
    level += getObjectDepth(object[key]);
  }
  return level;
};

export const returnKeyEmptyAsPerType = (item) => {
  if (typeof item === "object") {
    if (Array.isArray(item)) {
      return [];
    } else {
      return returnFillObjectToEmptyWithSameKey(item);
    }
  } else if (typeof item === "string") {
    return "";
  }
};

export const returnFillObjectToEmptyWithSameKey = (object) => {
  let newObject = {};
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === "object") {
      newObject[key] = returnFillObjectToEmptyWithSameKey(object[key]);
    } else if (typeof object[key] === "string") {
      newObject[key] = "";
    }
  });
  return newObject;
};

export const postVideoToS3 = async ({ video, url, setVideoProgress }) => {
  await axios
    .put(url, video, {
      headers: {
        "Content-Type": video.type,
      },
      onUploadProgress: (data) => {
        setVideoProgress(Math.round((100 * data.loaded) / data.total));
      },
    })
    .then(() => {
      // toast.success("Video updated successfully.");
      return true;
    })
    .catch(async (e) => {
      toast.warn("Something went wrong. Please try again later.");
      return false;
    })
    .finally(() => {
      setVideoProgress(0);
    });
};

export const getNestedObject = (obj = {}, nestedKey = "") => {
  const keys = nestedKey.split(".");
  const value = keys.reduce((acc, currKey) => acc && acc[currKey], obj);
  return value;
};

export const apiHeader = (token, isFormData) => {
  if (token && !isFormData) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  }
  if (token && isFormData) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
  }
  if (!token && !isFormData) {
    return {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (!token && isFormData) {
    return {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  }
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const CreateFormData = (data) => {
  const formData = new FormData();
  for (let key in data) {
    if (Array.isArray(data[key])) {
      for (let d in data[key]) {
        if (typeof data[key][d] == "string") {
          formData.append(key, data[key][d]);
        } else if (
          data[key][d] instanceof File ||
          data[key][d] instanceof Date
        ) {
          formData.append(key, data[key][d]);
        } else {
          formData.append(key, JSON.stringify(data[key][d]));
        }
      }
    } else if (typeof data[key] == "object") {
      if (data[key] instanceof File) {
        formData.append(key, data[key]);
      } else {
        formData.append(key, JSON.stringify(data[key]));
      }
    } else {
      formData.append(key, data[key]);
    }
  }
  return formData;
};

export const firebaseVapidObject = {
  vapidKey: "",
};

export const capitalizeFirstLetter = (l) => {
  if (typeof l !== "string" || l.length === 0) {
    return "";
  }
  return l.charAt(0).toUpperCase() + l.slice(1);
};

export const RECORDS_LIMIT = 10;
export const FORM_REG_EX = /([a-z])([A-Z])/g;
export const FORM_REG_EX_REPLACER = "$1 $2";

export const NUMBER_REG_EX = /[^0-9]+/g;
export const DECIMAL_REG_EX = /^\d+(\.\d{0,2})?$/;

export const URL_REG_EX = /^(http|https):\/\/[^ "]+$/;
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;

export const getMilestoneActionsButtonsVisibility = ({
  milestoneStatus,
  jobData,
  index,
  isCus,
  isSp,
}) => {
  let showEscrowButton = false;
  let showReleaseRequestButton = false;
  let showReleaseButton = false;
  let showInProgressButton = false;
  let showCompleteWorkButtonSp = false;

  // early-return
  if (
    ["completed", "released"].includes(milestoneStatus) ||
    ["completed", "dispute-requested"].includes(jobData?.status)
  )
    return {
      showEscrowButton,
      showReleaseRequestButton,
      showReleaseButton,
      showInProgressButton,
      showCompleteWorkButtonSp,
    };

  if (
    isCus &&
    milestoneStatus === "pending" &&
    jobData?.status === "active" &&
    index === 0
  ) {
    showEscrowButton = true;
  }

  const prevMilestoneStatus =
    index > 0 ? jobData?.milestones[index - 1]?.status : null;

  // If previous milestone is released, show escrow button for the next milestone
  if (prevMilestoneStatus === "released" && isCus) {
    // Only show button for the next pending milestone
    if (index > 0 && jobData?.milestones[index]?.status === "pending") {
      showEscrowButton = true;
    }
  }

  if (isSp && milestoneStatus === "work-completed") {
    showReleaseRequestButton = true;
  }

  if (
    ["milestone-requested", "work-completed"].includes(milestoneStatus) &&
    isCus
  ) {
    showReleaseButton = true;
  }

  if (isSp && milestoneStatus === "escrowed") {
    showInProgressButton = true;
  }

  if (isSp && milestoneStatus === "in-progress") {
    showCompleteWorkButtonSp = true;
  }

  return {
    showEscrowButton,
    showReleaseRequestButton,
    showReleaseButton,
    showInProgressButton,
    showCompleteWorkButtonSp,
  };
};

export const modifyChatData = (data, userId) => {
  // Create a list of users with the appropriate unread count
  const usersList = data.flatMap((chatRoom) =>
    chatRoom.users
      .filter((user) => user.userId._id !== userId) // Exclude your user from the list
      .map((user) => ({
        ...user,
        unreadCount:
          chatRoom.users.find((u) => u.userId._id === userId)?.unreadCount || 0, // Set unreadCount for your ID only
        chatRoomId: chatRoom._id,
        createdAt: chatRoom.createdAt,
        isEndChat: chatRoom.isEndChat,
        lastChatted: chatRoom.lastChatted,
        lastMessage: chatRoom.lastMessage,
        product: chatRoom.product,
        roomType: chatRoom.roomType,
        updatedAt: chatRoom.updatedAt,
      }))
  );

  // Return the modified users list
  return { usersList };
};

export const modifyMessages = (messageData) => {
  const modifyMessages = messageData.map((item) => ({
    senderId: item?.from?._id,
    userName: `${item?.from?.firstName || ""} ${
      item?.from?.lastName || ""
    }`.trim(),
    message: item?.message?.text || "",
    _id: item?._id,
    createdAt: item?.createdAt,
    type: item?.message?.type || "text",
    media: item?.message?.media || "",
  }));
  return modifyMessages;
};

export const getUniqueBrowserId = () => {
  const uniqueBrowserId = localStorage?.getItem("uniqueBrowserId");
  if (uniqueBrowserId) {
    return uniqueBrowserId;
  }

  if (window.navigator) {
    var navigator_info = window.navigator;
    var screen_info = window.screen;
    var uid = navigator_info.mimeTypes.length;
    uid += navigator_info.userAgent.replace(/\D+/g, "");
    uid += navigator_info.plugins.length;
    uid += screen_info.height || "";
    uid += screen_info.width || "";
    uid += screen_info.pixelDepth || "";

    localStorage.setItem("uniqueBrowserId", uid);
    return uid;
  } else {
    const theId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    localStorage.setItem("uniqueBrowserId", theId);
    return theId;
  }
};

export const generateMongoId = () => {
  return (
    Math.floor(Date.now() / 1000).toString(16) +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};

export const CreateNewFormData = (data) => {
  const formData = new FormData();
  for (let key in data) {
    if (Array.isArray(data[key])) {
      for (let d in data[key]) {
        if (typeof data[key][d] == "string") {
          formData.append(key, data[key][d]);
        } else if (
          data[key][d] instanceof File ||
          data[key][d] instanceof Date
        ) {
          formData.append(key, data[key][d]);
        } else {
          formData.append(key, JSON.stringify(data[key][d]));
        }
      }
    } else if (typeof data[key] == "object") {
      if (data[key] instanceof File) {
        formData.append(key, data[key]);
      } else if (
        typeof data[key] === "string" &&
        data[key].startsWith("data:image")
      ) {
        const [mime, b64] = data[key].split(",");
        const byteString = atob(b64);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mime.split(":")[1].split(";")[0] });
        formData.append(key, blob, "image.png");
      } else {
        formData.append(key, JSON.stringify(data[key]));
      }
    } else {
      formData.append(key, data[key]);
    }
  }
  return formData;
};

export const calculateProfileCompletion = (user) => {
  let completedSections = 0;

  if (
    user?.portfolio?.workExperience.every(
      (exp) =>
        exp.title &&
        exp.company &&
        exp.city &&
        exp.country.length &&
        exp.startDate &&
        exp.endDate &&
        exp.description
    )
  ) {
    completedSections += 1;
  }

  if (
    user?.portfolio?.educationHistory.every(
      (edu) =>
        edu.schoolName &&
        edu.degree &&
        edu.fieldOfStudy &&
        edu.admissionDate &&
        edu.graduationDate
    )
  ) {
    completedSections += 1;
  }

  if (
    user?.portfolio?.areaOfExpertise?.languages?.length &&
    user?.portfolio?.areaOfExpertise?.expertise?.length &&
    user?.portfolio?.areaOfExpertise?.link
  ) {
    completedSections += 1;
  }

  if (user?.portfolio?.areaOfExpertise?.portfolioImages?.length) {
    completedSections += 1;
  }

  if (user?.resume.length) {
    completedSections += 1;
  }

  return completedSections * 20;
};

export function calculateExperience(dates, symbol = "year") {
  if (!dates.length) return `0 ${symbol}`;

  // Convert string dates to Date objects
  const dateObjects = dates.map((date) => new Date(date));

  // Find min and max dates
  const minDate = new Date(Math.min(...dateObjects));
  const maxDate = new Date(Math.max(...dateObjects));

  // Calculate experience in years
  const diffInMilliseconds = maxDate - minDate;
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years

  let formattedYears =
    diffInYears < 1 ? diffInYears.toFixed(1) : Math.floor(diffInYears);
  let suffix = formattedYears == 1 ? symbol : `${symbol}s`;

  return `${formattedYears} ${suffix}`;
}
