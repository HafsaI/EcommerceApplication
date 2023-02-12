import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="heroSection">

      <div className="heroSection_box">
        <div className="heroSection_box_left">
          <h1 className="heroSection_title">Find Your Style</h1>
          <br/>
          <p>
          More everyday essentials to love, layer and last. Inspired by Northern California, made for everywhere else, too.
          </p>

        </div>
        <div className="heroSection_box_right">
          <Image
            src={'/images/hero.jpg'}
            alt="Hero section"
            width={400}
            height={450}
          />
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;