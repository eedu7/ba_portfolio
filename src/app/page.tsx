import Header from "@/components/Header";
import {Button} from "@/components/ui/button";
import BackgroundImage from "../../public/images/header_background.jpg";
import Image from "next/image";

export default function Home() {
    return (<>
        <Header/>
        <main>
            <div className="h-[320px] w-full flex justify-center items-center lg:max-w-screen-xl mx-auto">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-3xl font-bold font-mono">I&apos;m Bisal Ahmad, a Creative Marketer</h1>
                    <a href="mailto:bisalahmadengr@gmail.com"
                       className="underline cursor-pointer text-md">bisalahmadengr@gmail.com</a>
                    <Button className="text-sm font-sans w-36 border-slate-600 rounded-none tracking-wide"
                            variant="outline">SEE MY WORK</Button>
                </div>
            </div>
            <div
                className="w-full h-[400px]  bg-gray-950 ">
                <div className="max-w-screen-lg h-full mx-auto grid grid-cols-2 content-center px-8 text-white ">
                    <div className="grid-cols-1">
                        <Image src={BackgroundImage} alt="Profile Image" className="w-[451px] h-[301px]"/>
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
        </main>

    </>);
}

