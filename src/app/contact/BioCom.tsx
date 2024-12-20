import React from 'react'
import {RiLinkedinBoxFill} from "@remixicon/react";

const BioCom = () => {
    return (<section>
            <div className="w-full h-full max-w-screen-lg mx-auto md:grid grid-cols-2">
                <div className="grid-cols-1">
                </div>
                <div className="grid-cols-1">
                    <h1>I&apos;d be delighted to meet you <span>😄</span></h1>
                    <p>I would love to get together and learn more about your design and brand development goals. The
                        fastest way to reach me is by phone or text, but I also check my email quite often. Feel free to
                        contact me via LinkedIn as well. I look forward to hearing from you!
                    </p>
                    <div>
                        <div>
                            <RiLinkedinBoxFill/>
                        </div>
                        <div>
                            <a href="https://www.youtube.com">bisalahmadeng@gmail.com</a>
                            <a href="https://www.youtube.com">/in/bisal-ahmad</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>)
}
export default BioCom
