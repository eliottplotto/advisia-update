"use client";

import Slider from "react-infinite-logo-slider";

export default function LogosSlider() {
  return (
    <Slider
      width="200px"
      duration={20}
      pauseOnHover={false}
      blurBorders={false}
      blurBorderColor={"#fff"}
    >
      <Slider.Slide>
        <img src="/google.svg" alt="any" className="w-36" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/airbnb.svg" alt="any" className="w-36" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/total.svg" alt="any" className="w-36" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/pornhub.svg" alt="any" className="w-36" />
      </Slider.Slide>
    </Slider>
  );
}
