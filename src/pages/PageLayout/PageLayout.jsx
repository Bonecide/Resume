import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function PageLayout({lang,setlang}) {



    return(
        <main>
            <Header lang={lang} setLang={setlang}/>
            <Outlet/>
            <Footer/>
        </main>

    )
}