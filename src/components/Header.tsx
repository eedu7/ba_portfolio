"use client";
import React from 'react'
import Navbar from "@/components/Navbar";
import HeaderImage from "@/components/HeaderImage";
import BackgroundImage from "../../public/images/header_background.jpg";


const Header: React.FC = () => {
    return (<header>
        <Navbar/>
        <HeaderImage backgroundImage={BackgroundImage} mainText={"Bisal Ahmad"} subText={"It's me, Bisal. How are you doing?"}/>
    </header>)
}
export default Header
