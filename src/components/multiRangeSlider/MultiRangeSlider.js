import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./multiRangeSlider.styles.js";
import { Container, RangeWrapper, Title } from "./multiRangeSlider.styles.js";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const [newRange, setNewRange] = useState(0);
  const [newRange2, setNewRange2] = useState(0);
  const range = useRef(null);

  const [step, setStep] = useState(0);
  const [step2, setStep2] = useState(0);
  const ref = useRef(null);
  const ref2 = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    //calc steps for input one
    const rangeLinePadding = 16;
    const calcStep =
      (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
    setStep(calcStep);

    //calc steps for input two
    const rangeLinePadding2 = 16;
    const calcStep2 =
      (ref2.current.offsetWidth - rangeLinePadding2) / ref2.current.max;
    setStep2(calcStep2);

    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <Container>
      <Title>Price per month</Title>
      <RangeWrapper newRange={newRange} step={step} className="range-container">
        <input
          type="range"
          ref={ref}
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
            setNewRange(event.target.value);
          }}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <label
          htmlFor="range"
          style={{
            transform: `translateX(${newRange * step}px)`,
          }}
        ></label>

        <input
          type="range"
          ref={ref2}
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
            setNewRange2(event.target.value);
          }}
          className="thumb thumb--right"
        />
        <label
          htmlFor="range"
          className="label"
          style={{
            transform: `translateX(${newRange2 * step2}px)`,
          }}
        ></label>

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">AED{minVal}</div>
          <div className="slider__right-value">AED{maxVal}</div>
        </div>
      </RangeWrapper>
    </Container>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
