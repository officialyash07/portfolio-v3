import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { AnimatedDotsBackground } from "../layout/AnimateBackground";

import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <AnimatedDotsBackground />
            </main>
            <Footer />
        </>
    );
};

export default Root;
