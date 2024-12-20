import React from 'react'
import Navbar from "@/components/Navbar";
import HeaderImage from "@/components/HeaderImage";
import NezukoImage from "../../../public/images/Nezuko.webp";
import Copyrights from "@/components/Copyrights";

const Layout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (<>
            <header>
                <Navbar/>
                <HeaderImage backgroundImage={NezukoImage} mainText={"I'm easy to find."}
                             subText={"DON'T BE SHY!"}/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Copyrights />
            </footer>
        </>)
}
export default Layout
