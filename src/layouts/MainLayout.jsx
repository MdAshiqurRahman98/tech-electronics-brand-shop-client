import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto min-h-screen px-7 md:px-16 lg:px-16 py-3 mb-7">
                <NavigationBar></NavigationBar>
                <Outlet></Outlet>
            </div>
            <div className="bg-black">
                <div className="max-w-screen-xl mx-auto px-7 md:px-16 lg:px-9 py-3">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;