import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 flex flex-col py-10 md:flex-row items-center gap-10">

        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <p className="font-['Inknut_Antiqua'] text-base md:text-xl lg:text-2xl text-black mb-3">
            Your Project, Our Expertise:
          </p>

          <h1 className="font-['Inknut_Antiqua'] text-3xl md:text-3xl lg:text-[36px] leading-[1.6] text-black mb-6">
            Transforming Spaces from{" "}
            <strong className="font-bold">Concept to Completion</strong>
          </h1>

          <button className="font-['Inknut_Antiqua'] bg-[linear-gradient(90deg,#DDAB52_0%,#FDDE6E_100%)] px-6 py-3 text-sm md:text-base font-bold hover:shadow-xl transition rounded-md">
            Get In Touch
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/hero.svg"
            alt="Interior"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;