import { Outlet } from "react-router-dom";
import Header from "./components/header";
import BottomNav from "./components/bottom-nav";
import Footer from "./components/footer";

const Layout = () => {
    return (
        <>
            <Header />
            <BottomNav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout