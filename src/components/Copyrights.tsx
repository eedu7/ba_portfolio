import React from 'react'
import {Copyright} from "lucide-react";

const Copyrights = () => {
    return (<section className="w-full bg-slate-200">
            <div className="max-w-screen-lg mx-auto">
                <p className="text-sm font-extralight text-slate-400 flex items-center gap-1 p-2">Copyright <Copyright
                    className="inline-block size-[14px]"/> 2014-2024 Bisal Ahmad</p>
            </div>
        </section>)
}
export default Copyrights
