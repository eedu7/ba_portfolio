import React from 'react'
import {Separator} from "@/components/ui/separator";
import {RiLinkedinBoxFill} from "@remixicon/react";
import {MailIcon} from "lucide-react";

const Contact = () => {
    return (
        <section className="w-full my-24">
            <div className="max-w-screen-lg mx-auto gap-6 flex w-full h-full justify-center items-center flex-col">
                <h1 className="text-[34px] md:text-[48px] lg:text-[32px] font-abril_fatface">Let&apos;s connect.</h1>
                <Separator className="w-44 bg-slate-700"/>
                <div className="flex flex-col md:flex-row w-full justify-center items-center gap-12 md:gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <a href="https://www.youtube.com">
                            <RiLinkedinBoxFill className="size-10 cursor-pointer"/>
                        </a>
                        <a href="/public" className="underline text-[12px] cursor-pointer font-bird_eye ">/in/bisal_ahmad</a>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <a href="https://www.youtube.com">
                            <MailIcon className="size-10 cursor-pointer"/>
                        </a>
                        <a href="/public" className="underline cursor-pointer text-[12px] font-bird_eye">bisal_ahmad</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
