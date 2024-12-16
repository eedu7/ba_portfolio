import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from 'next/link';
import navigationLinks from "@/constants/nav-links";

const Navbar: React.FC = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="gap-4">
                {navigationLinks.map(({ id, label, href }) => (
                    <NavigationMenuItem key={id}>
                        <Link href={href} legacyBehavior  passHref>
                            <NavigationMenuLink className="bg-transparent hover:text-sky-500">
                                {label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Navbar;
