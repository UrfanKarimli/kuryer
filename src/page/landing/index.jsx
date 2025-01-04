import About from "./sections/about"
import ContactUS from "./sections/contact"
import Famous from "./sections/famous"
import Home from "./sections/home"
import Services from "./sections/servicess"
import Skills from "./sections/skills"

const LandingPage = () => {
    return (
        <div className=" overflow-hidden mt-20 ">
            <section id="home " className=" pt-40 pb-20 bg-[#21232c] flex items-center justify-center">
                <Home />
            </section>
            <section id="famous" className=" pt-4 pb-20 bg-[#21232c] flex items-center justify-center">
                <Famous />
            </section>
            <section id="about" className=" pt-28 pb-8 bg-[#2b2e3b] flex items-center justify-center">
                <About />
            </section>
            <section id="skills" className="pt-28 pb-8 bg-[#21232c] flex items-center justify-center">
                <Skills />
            </section>
            <section id="services" className=" pt-28 pb-8 bg-[#2b2e3b] flex items-center justify-center">
                <Services />
            </section>
            <section id="services" className=" pt-28 pb-8 bg-[#2b2e3b] flex items-center justify-center">
                <ContactUS />
            </section>
        </div>
    )
}

export default LandingPage