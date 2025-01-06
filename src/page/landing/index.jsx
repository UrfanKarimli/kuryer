import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import About from "./sections/about";
import ContactUS from "./sections/contact";
import Famous from "./sections/famous";
import Home from "./sections/home";
import Services from "./sections/servicess";
import Skills from "./sections/skills";

const LandingPage = () => {
    const homeRef = useRef(null);
    const famousRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
console.log(searchParams)

    useEffect(() => {
        const refs = [
            { id: "home", ref: homeRef },
            { id: "famous", ref: famousRef },
            { id: "about", ref: aboutRef },
            { id: "skills", ref: skillsRef },
            { id: "services", ref: servicesRef },
            { id: "contact", ref: contactRef },
        ];

        const handleScroll = () => {
            refs.forEach(({ id, ref }) => {
                const element = ref.current;
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible =
                        rect.top >= 0 &&
                        rect.top <= window.innerHeight * 0.6; 
                    if (isVisible) {
                        setSearchParams({ section: id }); 
                    }
                }
            });
        };
        
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setSearchParams]);

    return (
        <div className="overflow-hidden mt-20">
            <section
                id="home"
                ref={homeRef}
                className="pt-40 pb-20 bg-[#21232c] flex items-center justify-center scroll-mt-24"
            >
                <Home />
            </section>
            <section
                id="famous"
                ref={famousRef}
                className="pt-4 pb-20 bg-[#21232c] flex items-center justify-center scroll-mt-24"
            >
                <Famous />
            </section>
            <section
                id="about"
                ref={aboutRef}
                className="pt-28 pb-8 bg-[#2b2e3b] flex items-center justify-center scroll-mt-24"
            >
                <About />
            </section>
            <section
                id="skills"
                ref={skillsRef}
                className="pt-28 pb-8 bg-[#21232c] flex items-center justify-center scroll-mt-24"
            >
                <Skills />
            </section>
            <section
                id="services"
                ref={servicesRef}
                className="pt-28 pb-8 bg-[#2b2e3b] flex items-center justify-center scroll-mt-24"
            >
                <Services />
            </section>
            <section
                id="contact"
                ref={contactRef}
                className="pt-28 pb-8 bg-[#2b2e3b] flex items-center justify-center scroll-mt-24"
            >
                <ContactUS />
            </section>
        </div>
    );
};

export default LandingPage;
