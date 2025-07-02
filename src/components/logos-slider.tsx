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
        <img
          src="/logos-confiance/la-french-tech.svg"
          alt="any"
          className="h-20 w-full object-contain"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-confiance/bpi-france.png"
          alt="any"
          className="h-20 w-full object-contain"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-confiance/reseau-entreprendre.webp"
          alt="any"
          className="h-10 w-full object-contain"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-confiance/banque-populaire.webp"
          alt="any"
          className="h-10 w-full object-contain"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-confiance/kedge-business-school.png"
          alt="any"
          className="h-10 w-full object-contain"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-confiance/lct-sdn.webp"
          alt="any"
          className="h-10 w-full object-contain"
        />
      </Slider.Slide>
    </Slider>
  );
}
