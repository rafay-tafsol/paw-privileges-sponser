"use client";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import classes from "./paginationComponent.module.css";
import { RECORDS_LIMIT } from "@/resources/utils/const";

const MAX_PAGES_TO_SHOW = 4;

export default function Pagination({
  totalRecords = 50,
  currentPage = 1,
  setCurrentPage = () => {},
}) {
  const totalPages = Math.ceil(totalRecords / RECORDS_LIMIT);

  const pageNumbers = Array(totalPages)
    .fill(totalPages)
    .map((_, index) => index + 1);

  const startIndex =
    currentPage >= MAX_PAGES_TO_SHOW
      ? currentPage -
        MAX_PAGES_TO_SHOW +
        (currentPage === pageNumbers[pageNumbers.length - 1] ? 0 : 1)
      : 0;

  const noOfPagesToShow = pageNumbers.slice(
    startIndex,
    startIndex + MAX_PAGES_TO_SHOW
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate record range
  const page = 1;

  return (
    <div className={classes.mainContainer}>
      <div
        className={classes.text}
      >{`Showing ${currentPage} of ${totalPages}`}</div>
      <div className="d-flex gap-2">
        <div onClick={goToPrevPage}>
          <div className={classes.iconBox}>
            <MdKeyboardArrowLeft size={20} />
          </div>
        </div>

        <div onClick={goToNextPage}>
          <div className={classes.iconBox}>
            <MdOutlineKeyboardArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
