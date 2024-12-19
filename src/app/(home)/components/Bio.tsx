import React from 'react'
import Image from "next/image";
import BackgroundImage from "../../../../public/images/header_background.jpg";

const Bio = () => {
    return (
        <div
            className="w-full h-[400px] bg-gray-950 ">
            <div className="max-w-screen-lg h-full mx-auto grid grid-cols-2 content-center px-8 text-white gap-4">
                <div className="grid-cols-1 lg:w-[451px] lg:h-[301px]">
                    <Image src={BackgroundImage} alt="Profile Image" className="w-full h-full object-cover"/>
                </div>
                <div className="grid-cols-1 gap-4 space-y-4">
                    <h1 className="text-4xl text-center font-bold font-mono tracking-widest">Meet Bisal</h1>
                    <p className="font-sans ">Bisal is a versatile marketing professional experienced in each
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
