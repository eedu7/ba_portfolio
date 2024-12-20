"use client";
import React from 'react'
import Image, {StaticImageData} from "next/image";

interface HeaderImageProps {
    backgroundImage: StaticImageData;
    mainText: string;
    subText: string;
}

const HeaderImage = ({backgroundImage, mainText, subText}: HeaderImageProps) => {
    return (<div className="relative w-full lg:h-[70vh] md:h-[55vh] h-[32vh] flex justify-center items-center">
        <Image
            src={backgroundImage}
            alt="BackgroundImage"
            className="object-cover absolute inset-0 w-full h-full filer grayscale"
        />
        <div className="z-10 text-white font-sans space-y-4 ">
            <h1 className="lg:text-[80px] md:text-[50px] text-[29px] font-abril_fatface font-medium tracking-widest text-center">{mainText}</h1>
            <p className="text-[12px] font-sans md:text-[24px] font-bold text-center">{subText}</p>
        </div>
    </div>)
}
export default HeaderImage
