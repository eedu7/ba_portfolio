"use client";
import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from 'next/link';
import navigationLinks from "@/constants/nav-links";
import {usePathname} from "next/navigation";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    return (
        <NavigationMenu>
            <NavigationMenuList className="gap-8">
                {navigationLinks.map(({ id, label, href }) => {
                    const isActive = pathname === href;
                    return (

                    <NavigationMenuItem key={id}>
                        <Link href={href} legacyBehavior  passHref>
                            <NavigationMenuLink className={`bg-transparent ${isActive ? 'border border-white hover:border-slate-200' : ''} p-3 text-white hover:text-slate-200 text-sm tracking-widest transition-all font-sans`}
                            >
                                {label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )})}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Navbar;
