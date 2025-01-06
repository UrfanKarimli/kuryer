import { Outlet } from "react-router-dom";
import Header from "./components/header";
import BottomNav from "./components/bottom-nav";
import Footer from "./components/footer";
import ScrollArrow from "./components/scroll-arrow";

const Layout = () => {
    return (
        <>
            <Header />
            <BottomNav />
            <main>
                <ScrollArrow/>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout