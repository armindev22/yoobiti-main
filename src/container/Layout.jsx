import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import HeaderPannel from "./HeaderPannel";

const Layout = () => {

    const [isPannel, setIsPannel] = useState(false);
    const location = useLocation();

    const pannelUrl = [
        /^\/pannel\/.+$/,
        /^\/pannel/
    ]

    useEffect(() => {
        if (location) {
            pannelUrl.forEach((pattern) => {
                const regex = new RegExp(pattern);
                if (regex.test(location.pathname)) {
                    return setIsPannel(true);
                }
            });
        } else {
            setIsPannel(false);
        }
        console.log("location", location);
    }, [location])


    return (
        <div>
            {isPannel ? (
                <div className="grid grid-cols-12">
                    <div className="hidden md:block md:col-span-2 ">
                        <Sidebar />
                    </div>
                    <div className="md:col-span-10 col-span-12 px-8 h-screen overflow-y-scroll">
                        <HeaderPannel />
                        <div className="">
                            <Content />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Header />
                    <Content />
                    <Footer />
                </>
            )}

        </div>
    );
};
export default Layout;
