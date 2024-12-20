
interface NavigationLink {
    id: number;
    label: string;
    href: string;
}

const navigationLinks: NavigationLink[] = [
    {
        id: 1,
        label: 'Home',
        href: '/',
    },
    {
        id: 2,
        label: 'Portfolio',
        href: '/portfolio',
    },
    {
        id: 3,
        label: 'Blog',
        href: '/blog',
    },
    {
        id: 4,
        label: 'Contact',
        href: '/contact',
    }
]

export default navigationLinks;