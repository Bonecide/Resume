import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function PageLayout() {



    return(
        <main>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>

    )
}