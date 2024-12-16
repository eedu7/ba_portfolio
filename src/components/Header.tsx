import React from 'react'
import Image from "next/image";
import BackgroundImage from "../../public/images/header_background.jpg";
import Navbar from "@/components/Navbar";

const Header = () => {
    return (<header>
            <div className="fixed border-2 border-sky-500 w-full flex justify-between items-center px-8 py-6">
                <div>
                    <h1 className="text-white font-semibold text-2xl tracking-widest font-mono">Bisal Ahmad</h1>
                </div>
                <Navbar/>
            </div>
            <Image src={BackgroundImage} alt="BackgroundImage" className="w-full h-[75vh] object-cover"/>
        </header>)
}
export default Header
