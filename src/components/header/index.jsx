import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HamburgMenu from "../hamburger-menu";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentSection = searchParams.get("section");

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

    const handleLinkClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setSearchParams({ section: sectionId });
        }
    };

    const getLinkClass = (sectionId) =>
        `hover:text-[#ff764d] transition-colors ease-in-out duration-300 ${
            currentSection === sectionId ? "text-[#ff764d]" : "text-[#f1f2f3]"
        }`;

    return (
        <header>
            <div
                className={`fixed top-0 left-0 z-50 w-full flex items-center justify-center transition-all duration-300 ${
                    isScrolled ? "bg-transparent backdrop-blur-md" : "bg-[#21232c]"
                }`}
            >
                <nav className="container w-full h-20 flex justify-between items-center">
                    <a href="/" className="text-[#f1f2f3] font-medium font-poppins">
                        Bığzsız <span className="text-[#ff764d]">Kuryer</span>
                    </a>
                    <ul className="hidden lg:flex items-center gap-7 text-[#f1f2f3] font-medium">
                        {["home", "famous", "about", "services", "contact"].map(
                            (sectionId) => (
                                <li key={sectionId}>
                                    <button
                                        onClick={() => handleLinkClick(sectionId)}
                                        className={getLinkClass(sectionId)}
                                    >
                                        {sectionId === "home" && "Ana səhifə"}
                                        {sectionId === "famous" && "Məşhurların seçimi"}
                                        {sectionId === "about" && "Haqqımızda"}
                                        {sectionId === "services" && "Xidmətlərimiz"}
                                        {sectionId === "contact" && "Əlaqə"}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                </nav>
            </div>
            <HamburgMenu />
        </header>
    );
};

export default Header;
