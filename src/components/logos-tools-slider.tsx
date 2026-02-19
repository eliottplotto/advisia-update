"use client";

import Slider from "react-infinite-logo-slider";

export default function LogosToolsSlider() {
  return (
    <Slider
      width="200px"
      duration={30}
      pauseOnHover={false}
      blurBorders={true}
      blurBorderColor={"#0a0a0f"}
    >
      <Slider.Slide>
        <img
          src="/logos-slider/shopify_monotone_black.svg"
          alt="Logo Shopify"
          draggable="false"
          className="h-8 w-full opacity-60 transition-all duration-300 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/webflow_full_logo_blue_black.svg"
          alt="Logo Webflow"
          className="h-6 w-full opacity-60 transition-all duration-300 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/logo-n8n.svg"
          alt="Logo n8n"
          className="h-8 w-full opacity-60 transition-all duration-300 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/make-logo.svg"
          alt="Logo Make"
          className="h-6 w-full opacity-60 transition-all duration-300 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/logo_react.svg"
          alt="Logo React"
          className="h-8 w-full opacity-60 transition-all duration-300 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/figma.svg"
          alt="Logo Figma"
          className="h-8 w-full opacity-60 transition-all duration-300 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/adobe.svg"
          alt="Logo Adobe"
          className="h-6 w-full opacity-60 transition-all duration-300 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}
          draggable="false"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos-slider/meta.svg"
          alt="Logo Meta"
          className="h-6 w-full opacity-60 transition-all duration-300 hover:opacity-100" style={{ filter: "brightness(0) invert(1)" }}
          draggable="false"
        />
      </Slider.Slide>
    </Slider>
  );
}
