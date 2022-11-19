import React from "react";
import { SliderCardWrapper } from "./sliderCard.styles";

const SliderCard = ({ title, bgImg }) => {
  return (
    <SliderCardWrapper bgImg={bgImg}>
      <span>{title}</span>
    </SliderCardWrapper>
  );
};

export default SliderCard;
