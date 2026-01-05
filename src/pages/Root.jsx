import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { AnimatedDotsBackground } from "../components/animations/AnimateBackground";

import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen" data-theme="">
            <Header />
            <main className="flex-1">
                <Outlet />
                <AnimatedDotsBackground />
                <div className="h-1 w-1 bg-transparent -z-10 rounded-full absolute top-[50%] left-[50%] shadow-[10px_-20px_800px_111px_rgba(218,250,255,0.5)] dark:hidden"></div>
            </main>
            <Footer />
        </div>
    );
};

export default Root;
