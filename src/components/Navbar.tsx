"use client";
import React from 'react';
import {
    NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import navigationLinks from "@/constants/nav-links";
import {usePathname} from "next/navigation";
import {
    Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger
} from "@/components/ui/drawer";
import useMediaQuery from "@/hooks/use-media-query";
import {MenuIcon} from "lucide-react";

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const isDesktop: boolean = useMediaQuery("(min-width: 1024px)");
    return (<div>

        {isDesktop ? <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-8">
                {navigationLinks.map(({id, label, href}) => {
                    const isActive = pathname === href;
                    return (

                        <NavigationMenuItem key={id}>
                            <Link href={href} legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={`bg-transparent ${isActive ? 'border border-white hover:border-slate-200' : ''} p-3 text-white hover:text-slate-200 text-sm tracking-widest transition-all font-sans`}
                                >
                                    {label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>)
                })}
            </NavigationMenuList>
        </NavigationMenu> : <Drawer direction="top">
            <DrawerTrigger><MenuIcon/></DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>}


    </div>);
}

export default Navbar;
