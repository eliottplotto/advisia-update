"use client";

import Slider from "react-infinite-logo-slider";

export default function LogosSlider() {
  return (
    <Slider
      width="200px"
      duration={30}
      pauseOnHover={false}
      blurBorders={true}
      blurBorderColor={"#0c0a08"}
    >
      <Slider.Slide>
        <img src="/advisia-logo-white-h32.svg" alt="any" className="h-10" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/advisia-logo-white-h32.svg" alt="any" className="h-10" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/advisia-logo-white-h32.svg" alt="any" className="h-10" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/advisia-logo-white-h32.svg" alt="any" className="h-10" />
      </Slider.Slide>
    </Slider>
  );
}
