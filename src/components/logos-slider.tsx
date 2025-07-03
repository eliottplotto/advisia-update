"use client";

import Slider from "react-infinite-logo-slider";

export default function LogosSlider() {
  return (
    <Slider
      width="200px"
      duration={30}
      pauseOnHover={false}
      blurBorders={false}
      blurBorderColor={"#fff"}
    >
      <Slider.Slide>
        <img src="/advisia-logo-black-h32.svg" alt="any" className="h-10" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/advisia-logo-black-h32.svg" alt="any" className="h-10" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/advisia-logo-black-h32.svg" alt="any" className="h-10" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/advisia-logo-black-h32.svg" alt="any" className="h-10" />
      </Slider.Slide>
    </Slider>
  );
}
