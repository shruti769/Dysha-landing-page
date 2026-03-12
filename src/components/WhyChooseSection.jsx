import React from "react";

const leftFeatures = [
    {
        title: "COMPREHENSIVE EXPERTISE",
        desc: "Diverse services from 3D designs to robust construction solutions.",
        icon: "/Frame 4.svg",
    },
    {
        title: "CUSTOMIZED SOLUTIONS",
        desc: "Tailored services to meet specific project requirements effectively.",
        icon: "/Frame 6.svg",
    },
    {
        title: "SUSTAINABLE PRACTICES",
        desc: "Eco-friendly methods for environmentally responsible solutions.",
        icon: "/Frame 8.svg",
    },
];

const rightFeatures = [
    {
        title: "QUALITY CRAFTSMANSHIP",
        desc: "Premium materials and techniques ensuring high-quality outcomes.",
        icon: "/Frame 3.svg",
    },
    {
        title: "CUSTOMER-CENTRIC APPROACH",
        desc: "Responsive, transparent, and committed to customer satisfaction.",
        icon: "/Frame 5.svg",
    },
    {
        title: "TIMELY DELIVERY",
        desc: "Projects completed efficiently within promised timelines.",
        icon: "/Frame 7.svg",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 px-6">
            <h2
                className="text-center text-[28px] md:text-4xl font-bold mb-16"
                style={{ fontFamily: "Inknut Antiqua" }}
            >
                Why Choose Dysha Design and Contractor Limited
            </h2>

            <div className="max-w-6xl mx-auto pt-10">

                <div className="items-center grid grid-cols-[2%_98%] md:grid-cols-[42%_16%_42%] lg:grid-cols-[40%_20%_40%] gap-0 md:gap-6">

                    {/* LEFT SIDE (desktop only) */}
                    <div className="hidden md:block space-y-20 text-left">
                        {leftFeatures.map((item, i) => (
                            <div key={i}>
                                <h3 className="font-bold text-[24px] mb-4" style={{ fontFamily: "Inknut Antiqua" }}>
                                    {item.title}
                                </h3>

                                <p className="text-black text-[16px] sm:text-[18px]  mb-10" style={{ fontFamily: "Inknut Antiqua", lineHeight: "1.7em" }}>
                                    {item.desc}
                                </p>

                                <img src={item.icon} className="w-28 mx-auto" alt={item.title} />
                            </div>
                        ))}
                    </div>

                    {/* CENTER TIMELINE */}
                    <div className="flex md:justify-center">
                        <div className="w-[2px] relative bg-[#FDDE6E] min-h-[1600px] md:min-h-[1100px]">

                            {[...Array(6)].map((_, i) => (
                                <span
                                    key={i}
                                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                                    style={{
                                        top: `${window.innerWidth < 768 ? i * 320 : i * 220}px`,
                                        background: "linear-gradient(180deg, #DDAB52 0%, #FDDE6E 100%)"
                                    }}
                                />
                            ))}

                        </div>
                    </div>

                    {/* RIGHT SIDE (desktop) + MOBILE CONTENT */}
                    <div className="space-y-20">

                        {/* DESKTOP RIGHT */}
                        <div className="hidden md:block text-right space-y-20 pr-4">
                            {rightFeatures.map((item, i) => (
                                <div key={i}>
                                    <img src={item.icon} className="w-28 mx-auto mb-10" alt={item.title} />

                                    <h3 className="font-bold text-[24px] mb-4" style={{ fontFamily: "Inknut Antiqua" }}>
                                        {item.title}
                                    </h3>

                                    <p className="text-black text-[18px]" style={{ fontFamily: "Inknut Antiqua", lineHeight: "1.7em" }}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* MOBILE STACKED CONTENT */}
                        <div className="md:hidden space-y-16 pl-10">
                            {[...leftFeatures, ...rightFeatures].map((item, i) => (
                                <div key={i} className="">

                                    <img src={item.icon} className="w-20 mb-4 object-contain border-0 bg-transparent" alt={item.title} />

                                    <h3 className="font-bold text-[20px] mb-3" style={{ fontFamily: "Inknut Antiqua" }}>
                                        {item.title}
                                    </h3>

                                    <p className="text-black text-[16px]" style={{ fontFamily: "Inknut Antiqua", lineHeight: "1.6em" }}>
                                        {item.desc}
                                    </p>

                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
            <div className="flex justify-center mt-20">
                <button className="font-['Inknut_Antiqua'] bg-[linear-gradient(90deg,#DDAB52_0%,#FDDE6E_100%)] px-6 py-2 text-[16px] font-bold hover:shadow-xl transition rounded-md">
                    Get In Touch
                </button>
            </div>
        </section>
    );
};

export default WhyChooseUs;