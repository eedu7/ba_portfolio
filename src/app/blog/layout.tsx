import React from 'react'
import Navbar from "@/components/Navbar";
import HeaderImage from "@/components/HeaderImage";
import BooksBackground from "../../../public/images/BooksBackground.webp";
import Copyrights from "@/components/Copyrights";

const Layout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (<>
        <header>
            <Navbar/>
            <HeaderImage backgroundImage={BooksBackground} mainText={"Read. Think. Grow. Repeat."}
                         subText={"Books build better worlds."}/>
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
