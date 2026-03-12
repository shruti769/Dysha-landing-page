import { useState, useEffect } from "react";

const NAV_LINKS = ["Services", "Why Choose Us", "FAQ's"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="bg-white">

            {/* NAVBAR */}
            <nav
                className="w-full bg-[url('/header-bg.svg')] bg-cover bg-center bg-no-repeat"
            >
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <img
                        src="/logo.svg"
                        alt="Dysha Home Interiors and Maintenance"
                        className="h-18 object-contain"
                    />

                    {/* Desktop Menu */}
                    <div className=" z-20 relative hidden md:flex items-center gap-10">

                        <img
                            src="/lamp.svg"
                            alt="lamp"
                            className="absolute -left-50 top-[-40px] z-20"
                        />
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link}
                                href="#"
                                style={{ fontFamily: "Inknut Antiqua" }}
                                className="text-xs font-extrabold  uppercase text-[#1a1a1a] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all"
                            >
                                {link}
                            </a>
                        ))}

                        <a
                            href="#"
                            style={{ fontFamily: "Inknut Antiqua" }}
                            className="bg-[#FFFFFF] px-3 py-1.5 text-xs rounded-md font-extrabold uppercase "
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex md:hidden flex-col gap-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="w-6 h-[2px] bg-black"></span>
                        <span className="w-6 h-[2px] bg-black"></span>
                        <span className="w-6 h-[2px] bg-black"></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="px-6 py-6 flex flex-col gap-6 md:hidden">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link}
                                href="#"
                                style={{ fontFamily: "Inknut Antiqua" }}
                                className="text-sm font-extrabold uppercase text-[#1a1a1a] relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all"
                            >
                                {link}
                            </a>
                        ))}

                        <a
                            href="#"
                            style={{ fontFamily: "Inknut Antiqua" }}
                            className="bg-[#FFFFFF] px-3 py-1.5 text-sm rounded-md font-extrabold uppercase w-fit"
                        >
                            Contact Us
                        </a>
                    </div>
                )}
            </nav>


        </div>
    );
}

export default Navbar