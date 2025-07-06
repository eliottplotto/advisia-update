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
        <img
          src="/logos-slider/lct-sdn.svg"
          alt="Logo LCT SDN"
          draggable="false"
          className="h-8 w-full"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/leroy-merlin.svg"
          alt="Logo Leroy Merlin"
          className="h-11 w-full"
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/banque-populaire.svg"
          alt="Logo Banque Populaire"
          className="h-10 w-full"
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/bpi-france.svg"
          alt="Logo BPI France"
          className="h-10 w-full"
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/SFR.svg"
          alt="Logo SFR"
          className="h-12 w-full"
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/kedge-business-school.svg"
          alt="Logo Kedge Business School"
          className="h-10 w-full"
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/reseau-entreprendre.svg"
          alt="Logo Réseau Entreprendre"
          className="h-10 w-full"
          draggable="false"
        />
      </Slider.Slide>
    </Slider>
  );
}
