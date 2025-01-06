import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const HamburgMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentSection = searchParams.get("section");
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

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
