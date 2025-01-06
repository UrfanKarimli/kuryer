import { useState, useEffect } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed right-12 hidden md:block bg-[#2b2e3b] text-[#ff764d] p-[6px] z-10 transition-all duration-300 rounded-[4px] shadow-[0_4px_12px_rgba(17,19,23,0.4)] ${isVisible ? "bottom-12" : "-bottom-1/2"
                }`}
        >
            <RiArrowUpLine />
        </button>
    );
};

export default ScrollArrow;