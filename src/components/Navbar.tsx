"use client";
import React from 'react';
import {
    NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import navigationLinks from "@/constants/nav-links";
import {usePathname} from "next/navigation";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";
import {MenuIcon} from "lucide-react";
import {useMediaQuery} from "@/hooks/use-media-query";

const Navbar: React.FC = () => {
    return (<nav
            className="fixed z-10 w-full flex justify-between items-center p-3 sm:px-4 md:px-4 md:py-2 lg:px-12 lg:py-6">
            <div>
                <h1 className="text-white font-semibold lg:text-[30px] md:text-[19px] font-sans">BISAL AHMAD</h1>
            </div>
            <NavbarList/>
        </nav>)
}

const NavbarList: React.FC = () => {
    const pathname = usePathname();
    const isDesktop: boolean = useMediaQuery("(min-width: 1024px)");

    if (isDesktop) {
        return (<NavigationMenu>
            <NavigationMenuList className="gap-8">
                {navigationLinks.map(({id, label, href}) => {
                    const isActive = pathname === href;
                    return (<NavigationMenuItem key={id}>
                        <Link href={href} legacyBehavior passHref>
                            <NavigationMenuLink
                                className={`bg-transparent ${isActive ? 'border border-white hover:border-slate-200' : ''} p-3 text-white hover:text-slate-200 text-sm tracking-widest transition-all font-sans`}
                            >
                                {label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>);
                })}
            </NavigationMenuList>
        </NavigationMenu>)
    } else {
        return (<Drawer direction="top">
            <DrawerTrigger>
                <MenuIcon className="text-white"/>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="hidden">Are you absolutely sure?</DrawerTitle>
                </DrawerHeader>
                <div>
                    <NavigationMenu>
                        <NavigationMenuList className="gap-8 flex flex-col">
                            {navigationLinks.map(({id, label, href}) => {
                                const isActive = pathname === href;
                                return (<NavigationMenuItem key={id} className="w-screen text-center">
                                    <Link href={href} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={`bg-transparent ${isActive ? 'border border-slate-600 hover:border-slate-600' : ''} p-3 text-black hover:text-gray-950 text-sm tracking-widest transition-all font-sans`}
                                        >
                                            {label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>);
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </DrawerContent>
        </Drawer>)
    }
};

export default Navbar;