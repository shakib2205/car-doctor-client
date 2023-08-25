import { Outlet } from "react-router-dom";
import Footer from "../pages/Shares/Footer/Footer";
import NavBar from "../pages/Shares/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;