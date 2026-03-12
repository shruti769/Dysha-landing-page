import React from "react";

const ContactUs = () => {
  return (
    <section
      className="pt-8 pb-16 px-6"
      style={{
        background: "linear-gradient(90deg, #DDAB52 0%, #FDDE6E 100%)",
      }}
    >
      {/* Title */}
      <h2
        className="text-center text-[28px] md:text-4xl font-bold mb-6"
        style={{ fontFamily: "Inknut Antiqua" }}
      >
        CONTACT US
      </h2>

      {/* Card */}
      <div className="max-w-6xl mx-auto bg-[#F2F2F2] rounded-lg border-t-6 border-[#FDDE6E] p-8 md:p-12">

        {/* Heading */}
        <h3
          className="text-2xl md:text-[24px] font-medium mb-8"
          style={{ fontFamily: "Inknut Antiqua" }}
        >
          Enter your Details<span className="text-[#27A638]">*</span>
        </h3>

        {/* Form */}
        <form className="space-y-8">

          {/* Row */}
          <div className="flex flex-col md:flex-row w-full gap-6"  style={{ fontFamily: "Inknut Antiqua" }}>

            {/* Name */}
            <input
              type="text"
              placeholder="Name*"
              className="w-full md:w-[80%] border border-gray-400 text-xl font-light placeholder-black rounded-sm px-4 py-2 bg-transparent focus:outline-none"
            />
<div className="w-full flex gap-2 md:gap-6 items-center justify-center">
            {/* Country Code */}
            <input
              type="text"
              placeholder="+91"
              className="w-[20%] border border-gray-400 text-xl font-light rounded-sm px-4 py-2 text-center bg-transparent focus:outline-none"
            />

            {/* Mobile */}
            <input
              type="text"
              placeholder="Mobile*"
              className="w-full md:w-[80%] border border-gray-400 text-xl font-light placeholder-black rounded-sm px-4 py-2 bg-transparent focus:outline-none"
            />

          </div>
</div>
          {/* Email */}
          <input
            type="email"
            placeholder="Email*"
            style={{ fontFamily: "Inknut Antiqua" }}
            className="w-full border border-gray-400 text-xl font-light placeholder-black rounded-sm px-4 py-2 bg-transparent focus:outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="px-8 py-2 text-white text-[20px] font-bold rounded-md"
            style={{
              fontFamily: "Inknut Antiqua",
              background: "linear-gradient(180deg, #DDAB52 0%, #FDDE6E 100%)",
            }}
          >
            Submit
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactUs;