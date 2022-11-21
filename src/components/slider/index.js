import React, { PureComponent } from "react";
import SliderCard from "./card";
import { SliderWrapper } from "./slider.styles";
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
  {
    text: "Gaming & VR",
    image: "/slider/img4.png",
  },
  {
    text: "Audio & Music",
    image: "/slider/img3.png",
  },
];

const DIRECTIOM_TYPE = {
  next: "NEXT",
  prev: "PREV",
};

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products || sliderArray,
      current: 1,
      needTransition: true,
      direction: "",
    };
  }

  handleSliderTranslateEnd = () => {
    console.log("handleSliderTranslateEnd");
    const { direction } = this.state;
    switch (direction) {
      case DIRECTIOM_TYPE.next:
        this.vaildNextSlider();
        break;
      case DIRECTIOM_TYPE.prev:
        this.vaildPrevSlider();
        break;
      default:
        break;
    }
  };

  vaildNextSlider = () => {
    const { current, products } = this.state;
    let _current = current;
    // if (_current > products.length - 3) {
    _current -= 1;
    const _products = [...products, ...products.slice(0, 1)].slice(-7);
    this.setState({
      needTransition: false,
      current: _current,
      products: _products,
    });
    // }
  };

  vaildPrevSlider = () => {
    const { current, products } = this.state;
    let _current = current;
    if (_current < 1) {
      _current += 1;
      const _products = [...products.slice(-1), ...products].slice(0, 7);
      this.setState({
        needTransition: false,
        current: _current,
        products: _products,
      });
    }
  };

  handleNext = () => {
    const { current, products } = this.state;
    let _current = current + 1;
    if (_current > products.length - 3) return;
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.next,
    });
  };

  handlePrev = () => {
    const { current } = this.state;
    let _current = current - 1;
    if (_current < 0) return;
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.prev,
    });
  };

  transLateVal = () => {
    // 17 here is the wisth of the li, it must be thesame to have smooth scrollings
    return -(this.state.current * 16);
  };

  sliderStyle = () => {
    if (this.state.needTransition) {
      return {
        transform: `translateX(${this.transLateVal()}%)`,
        transition: "transform 200ms ease-in-out",
      };
    }

    return {
      transform: `translateX(${this.transLateVal()}%)`,
    };
  };

  render() {
    return (
      <SliderWrapper>
        <div className="container">
          <div onClick={this.handlePrev} className={"left_arrow"}>
            <LeftArrow title={"Back"} />
          </div>
          <ul
            style={this.sliderStyle()}
            onTransitionEnd={this.handleSliderTranslateEnd}
          >
            {this.state.products.map(({ text, image }, idx) => (
              <li key={idx}>
                <SliderCard bgImg={image} title={text} />
              </li>
            ))}
          </ul>
          <div onClick={this.handleNext} className={"right_arrow"}>
            <RightArrow title="Next" className={"right_arrow"} />
          </div>
        </div>
      </SliderWrapper>
    );
  }
}
export default Slider;
