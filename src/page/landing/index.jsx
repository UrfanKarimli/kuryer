import About from "./sections/about"
import Famous from "./sections/famous"
import Home from "./sections/home"

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
        </div>
    )
}

export default LandingPage