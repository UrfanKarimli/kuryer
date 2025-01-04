import { useState, useEffect } from "react";
import HamburgMenu from "../hamburger-menu";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className=" fixed top-0 left-0 w-full flex items-center justify-center z-50 ">
            <div className={` w-full  flex items-center justify-center transition-all duration-300 ${isScrolled ? "bg-transparent backdrop-blur-md" : "bg-[#21232c]"
                }`}>
                <nav className="container w-full h-20 flex justify-between items-center ">
                    <a href="/" className="text-[#f1f2f3] font-medium font-poppins">
                        Bığzsız <span className="text-[#ff764d]">Kuryer</span>
                    </a>
                    <ul className="hidden lg:flex items-center gap-7 text-[#f1f2f3] font-medium ">
                        <li>
                            <a
                                href="/#home"
                                className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                            >
                                Ana səhifə
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#famous"
                                className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                            >
                                Məşhurların seçimi
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#about"
                                className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                            >
                                Haqqımızda
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#services"
                                className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                            >
                                Xidmətlərimiz
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#contact"
                                className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                            >
                                Əlaqə
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <span className="block lg:hidden z-50 mr-6"><HamburgMenu /></span>
        </header>
    );
};

export default Header;
