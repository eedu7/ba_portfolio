import React from 'react'
import {Button} from "@/components/ui/button";

const Introduction = () => {
    return (<div className="h-[320px] w-full flex justify-center items-center lg:max-w-screen-xl mx-auto">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="lg:text-[32px] md:text-[48px] font-bold font-abril_fatface">I&apos;m Bisal, a Creative
                    Marketer</h1>
                <a href="mailto:bisalahmadengr@gmail.com"
                   className="underline cursor-pointer text-md">bisalahmadengr@gmail.com</a>
                <Button className="text-sm font-sans w-36 border-slate-600 rounded-none tracking-wide"
                        variant="outline">SEE MY WORK</Button>
            </div>
        </div>)
}
export default Introduction