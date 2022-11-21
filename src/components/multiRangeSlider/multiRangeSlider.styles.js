import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
`;
export const RangeWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  /* new */
  label[for="range"] {
    top: 42%;
    left: 11%;
    width: 12px;
    height: 12px;
    z-index: 9999;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    background-color: white;
  }
  .label[for="range"] {
    top: 42%;
    left: 10.5%;
    width: 12px;
    height: 12px;
    z-index: 9999;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    background-color: white;
  }

  .slider {
    position: relative;
    width: 80%;
    /* width: 200px; */
  }

  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    height: 2px;
    border-radius: 3px;
  }

  .slider__track {
    z-index: 1;
    width: 100%;
    background: #e0e0e0;
    border-radius: 50px;
  }

  .slider__range {
    z-index: 2;
    border-radius: 50px;
    background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
  }

  /* values */
  .slider__left-value,
  .slider__right-value {
    color: blue;
    font-size: 12px;
    margin-top: 20px;
  }

  .slider__left-value {
    left: 6px;
  }

  .slider__right-value {
    right: -4px;
  }

  /* Removing the default appearance */
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    height: 0;
    width: 80%;
    outline: none;
    position: absolute;
    pointer-events: none;
    /* width: 200px; */
  }

  .thumb--left {
    z-index: 3;
  }

  .thumb--right {
    z-index: 4;
   
  }

  /* For Chrome browsers */
  .thumb::-webkit-slider-thumb {
    border: none;
    height: 18px;
    width: 18px;
    cursor: pointer;
    margin-top: 4px;
    border-radius: 50%;
    position: relative;
    pointer-events: all;
    box-shadow: 0 0 1px 1px #ced4da;
    background: linear-gradient(107.73deg, #d81f5a 0%, #8438bf 100%);
  }

  /* For Firefox browsers */
  .thumb::-moz-range-thumb {
    width: 18px;
    border: none;
    height: 18px;
    margin-top: 4px;
    cursor: pointer;
    background-color: #f1f5f7;
    border-radius: 50%;
    position: relative;
    pointer-events: all;
    box-shadow: 0 0 1px 1px #ced4da;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;
