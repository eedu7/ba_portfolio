"use client";
import React from 'react'
import Navbar from "@/components/Navbar";
import HeaderImage from "@/components/HeaderImage";

const Header: React.FC = () => {
    return (<header>
        <div className="fixed z-10 w-full flex justify-between items-center p-3 sm:px-4 md:px-4 md:py-2 lg:px-12 lg:py-6">
            <div>
                <h1 className="text-slate-50 font-semibold lg:text-[30px] md:text-[19px] font-sans">BISAL AHMAD</h1>
            </div>
            <Navbar/>
        </div>
        <HeaderImage/>
    </header>)
}
export default Header
