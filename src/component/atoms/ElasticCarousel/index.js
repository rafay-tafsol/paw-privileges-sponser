/* eslint-disable */
import React from "react";
import Carousel from "@itseasy21/react-elastic-carousel";
import classes from "./ElasticCarousel.module.css";
// import { useNavigate } from 'react-router';

const ElasticCarousel = ({
  customClass,
  showArrows = false,
  pagination = true,
  children,
  navigateLink,
  breakPoints = [
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
    { width: 1, itemsToShow: 1 },
  ],
  // itemPadding = [15, 20],
  enableAutoPlay,
  ...props
}) => {
  // const navigate = useNavigate();
  return (
    <>
      <style>
        {`

        .image-carousel .rec-slider-container{
            margin:0px;
        }
        .image-carousel .rec-pagination{
          margin-bottom: 3px;
        }
       

        .image-carousel .rec-carousel-wrapper{
            height:100%;
        }
        .image-carousel .rec-slider{
        }
        
        .image-carousel .rec-arrow-left{
            position: absolute;
            z-index: 1;
            left: 0px;
            height: 100%;
            min-width:0px;
            width:30px;
font-size:35px;
            box-shadow:none;
            // background-color: rgb(0 0 0 / 52%) !important;
            color:var(--secondary-clr) !important;
            margin-inline-start:0px;
        }
        .image-carousel .rec-arrow-right{
            position: absolute;
            right: 0px;
            height: 100%;
            min-width:0px;
            width:30px;
            box-shadow:none;
font-size:35px;
            color:var(--secondary-clr) !important;
            margin-inline-end:0px
        }
        .image-carousel .rec-item-wrapper{
            height:100%;
        }
        .image-carousel .rec-carousel-item{
          height:100%;
        }
        .image-carousel .rec-dot{
          box-shadow: #012a3b8a 0px 0px 1px 2px;
          border-radius:3px;
          background-color:#012a3b8a;
        }
        .image-carousel .rec-dot_active{
        box-shadow: var(--main-color) 0px 0px 1px 3px;
        background-color:var(--main-color);
        border-radius:3px;

        }


        .rec-pagination {
          position: absolute;
          bottom: 30px;
      }

      .rec-carousel-wrapper.image-carousel {
          position: relative;
      }


        `}
      </style>
      <div className={[classes.image, customClass].join(" ")}>
        {/* <div className={classes.invi_box} onClick={() => navigateLink && navigate(navigateLink)} /> */}
        <Carousel
          className="image-carousel"
          enableAutoPlay={enableAutoPlay}
          breakPoints={breakPoints}
          pagination={pagination}
          showArrows={showArrows}
          // itemPadding={itemPadding}
          {...props}
        >
          {children && children}
        </Carousel>
      </div>
    </>
  );
};

export default ElasticCarousel;
