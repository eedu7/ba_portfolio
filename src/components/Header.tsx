"use client";
import React from 'react'
import Navbar from "@/components/Navbar";
import HeaderImage from "@/components/HeaderImage";

const Header: React.FC = () => {
    return (<header>
        <div className="fixed z-10 w-full flex justify-between items-center px-2 sm:px-4 md:px-8 lg:px-12 py-6">
            <div>
                <h1 className="text-slate-50 font-semibold text-2xl tracking-widest font-sans">Bisal Ahmad</h1>
            </div>
            <Navbar/>
        </div>
        <HeaderImage/>
    </header>)
}
export default Header
