import React from 'react'
import {RiLinkedinBoxFill} from "@remixicon/react";
import Image from "next/image";
import NezukoKamadoBioImage from "../../../public/images/NezukoKamadoBioImage.webp";

const ContactPage = () => {
    return (
        <section className="my-4">
        <div className="w-full h-full max-w-screen-lg mx-auto md:grid grid-cols-3 gap-4 p-8">
            <div className="col-span-1">
                <Image src={NezukoKamadoBioImage} alt="Profile Image" className="object-fit lg:md-h[280px] md:h-[210px] h-[385px]"/>
            </div>
            <div className="col-span-2 space-y-6">
                <h1 className="font-abril_fatface lg:text-[32px] md:text-[48px] text-[34px] text-black font-bold">I&apos;d be delighted to meet you 😄</h1>
                <p className="lg:text-[18px] md:text-[24px] text-[19px] font-bird_eye font-extralight text-gray-500"> I would love to get together and learn more about your design and brand development goals. The
                    fastest way to reach me is by phone or text, but I also check my email quite often. Feel free to
                    contact me via LinkedIn as well. I look forward to hearing from you!
                </p>
                <div className="flex gap-4">
                    <div>
                        <RiLinkedinBoxFill className="lg:size-[58px] md:size-[43px] size-[61px] text-[#0077B5]"/>
                    </div>
                    <div className="flex flex-col">
                        <a href="https://www.youtube.com" className="text-[19px] lg:text-[18px] md:text-[24px] font-bird_eye underline cursor-pointer">bisalahmadeng@gmail.com</a>
                        <a href="https://www.youtube.com" className="text-[19px] lg:text-[18px] md:text-[24px] font-bird_eye underline cursor-pointer">/in/bisal-ahmad</a>
                    </div>
                </div>
            </div>

        </div>
    </section>)
}
export default ContactPage
