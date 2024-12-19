import React from 'react'
import {Separator} from "@/components/ui/separator";
import {RiLinkedinBoxFill} from "@remixicon/react";
import {MailIcon} from "lucide-react";

const Contact = () => {
    return (
        <section className="h-[350px] w-full">
            <div className="max-w-screen-lg mx-auto gap-6  flex w-full h-full justify-center items-center flex-col">

                <h1 className="font-extrabold text-4xl">Let&apos;s connect.</h1>
                <Separator className="w-44 bg-slate-700"/>
                <div className="flex w-full justify-center items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <a href="https://www.youtube.com">
                            <RiLinkedinBoxFill className="size-10 cursor-pointer"/>
                        </a>
                        <a href="/public" className="underline text-sm">/in/bisal_ahmad</a>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <a href="https://www.youtube.com">
                            <MailIcon className="size-10 cursor-pointer"/>
                        </a>
                        <a href="/public" className="underline cursor-pointer text-sm">bisal_ahmad</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
