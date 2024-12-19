import React from 'react'
import Image from "next/image";
import BackgroundImage from "../../../../public/images/header_background.jpg";

const Bio = () => {
    return (
        <div
            className="w-full py-4 bg-gray-950 ">
            <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center md:grid grid-cols-2 content-center px-8 text-white gap-4">
                <div className="grid-cols-1">
                    <Image src={BackgroundImage} alt="Profile Image" className="w-full h-full object-fit"/>
                </div>
                <div className="grid-cols-1 gap-4 space-y-4">
                    <h1 className="text-[32px] lg:text-[32px] md:text-[48px] text-center font-bold font-abril_fatface">Meet Bisal</h1>
                    <p className="font-bird_eye lg:text-[16px] text-center ">Bisal is a versatile marketing professional experienced in each
                        stage of the marketing and sales process. He is a thorough researcher skilled in
                        identifying target markets and customer insights to inform effective marketing programs.
                        Bisal uses an adept eye for design and powerful writing and public speaking skills to
                        create attractive and easily understandable communications for the target markets in any
                        given project.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Bio
