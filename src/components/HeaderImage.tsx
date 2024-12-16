import React from 'react'
import BackgroundImage from "../../public/images/header_background.jpg";
import Image from "next/image";

const HeaderImage = () => {
    return (<div className="relative w-full h-[75vh] flex justify-center items-center">
        <Image
            src={BackgroundImage}
            alt="BackgroundImage"
            className="object-cover absolute inset-0 w-full h-full filer grayscale"
        />
        <div className="z-10 text-white font-sans space-y-4">
            <h1 className="text-4xl font-medium tracking-widest">Bisal Ahmad</h1>
            <p className="text-lg opacity-80">It&apos;s me &quot;Bisal&quot; !, how are you doing!</p>

        </div>
    </div>)
}
export default HeaderImage
