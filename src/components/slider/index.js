import React from "react";
import SliderCard from "./card";
import { SliderWrapper } from "./slider.styles";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { colors } from "../../lib/colors";
import { ReactComponent as LeftArrow } from "./arrow/left_arrow.svg";
import { ReactComponent as RightArrow } from "./arrow/right_arrow.svg";
const sliderArray = [
  {
    text: "Computers",
    image: "/slider/img5.png",
  },
  {
    text: "Phones & Tablets",
    image: "/slider/img6.png",
  },
  {
    text: "Gaming & VR",
    image: "/slider/img4.png",
  },
  {
    text: "Audio & Music",
    image: "/slider/img3.png",
  },
  {
    text: "Wearables",
    image: "/slider/img2.png",
  },
  {
    text: "Home",
    image: "/slider/img1.png",
  },
];
const Slider = () => {
  return (
    <SliderWrapper>
      <LeftArrow title={"Back"} className={"left_arrow"} />
      {sliderArray.map(({ text, image }, idx) => (
        <SliderCard bgImg={image} title={text} key={idx} />
      ))}
      <RightArrow title="Next" className={"right_arrow"} />
    </SliderWrapper>
  );
};

export default Slider;
