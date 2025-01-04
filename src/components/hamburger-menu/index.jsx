import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const HamburgMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="block lg:hidden z-[60] mr-6 fixed top-[18px] right-6">
            <button onClick={toggleMenu} className="cursor-pointer text-[#f1f2f3]">
                <RiMenuLine className="h-6 w-6" />
            </button>
            <div
            style={{
                backdropFilter: "blur(16px)", 
                WebkitBackdropFilter: "blur(16px)", 
            }}
                className={`fixed top-0 ${
                    isMenuOpen ? "right-0" : "-right-full"
                } h-full w-1/2 bg-transparent  pt-[72px] pl-12 transition-all duration-300`}
            >
                <ul className="flex flex-col items-start gap-12 text-[#f1f2f3] font-medium">
                    <li>
                        <a
                            href="/#home"
                            onClick={closeMenu}
                            className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                        >
                            Ana səhifə
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#famous"
                            onClick={closeMenu}
                            className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                        >
                            Məşhurların seçimi
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#about"
                            onClick={closeMenu}
                            className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                        >
                            Haqqımızda
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#services"
                            onClick={closeMenu}
                            className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                        >
                            Xidmətlərimiz
                        </a>
                    </li>
                    <li>
                        <a
                            href="/#contact"
                            onClick={closeMenu}
                            className="hover:text-[#ff764d] transition-colors ease-in-out duration-300"
                        >
                            Əlaqə
                        </a>
                    </li>
                </ul>
                <button
                    onClick={closeMenu}
                    className="absolute top-4 right-6 cursor-pointer text-[#f1f2f3]"
                >
                    <RiCloseLine className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default HamburgMenu;
