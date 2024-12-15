import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-100 flex justify-between items-center border px-24 my-4">
            <h1 className="text-3xl">BISAL AHMAD</h1>
            <ul className="flex items-center gap-4">
               <li className="text-lg">HOME</li>
               <li className="text-lg">PORTFOLIO</li>
               <li className="text-lg">BLOG</li>
               <li className="text-lg">CONTACT</li>
               <li className="text-lg">LOG IN</li>
            </ul>

        </nav>
    )
}
export default Navbar
