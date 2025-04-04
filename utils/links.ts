
type LinksProps = {
    id: number;
    title: string;
    path: string
}

export const links: LinksProps[] = [
    {
        id: 1,
        title: 'home',
        path: '/'
    },
    {
        id: 2,
        title: 'products',
        path: '/products'
    },
    {
        id: 3,
        title: 'new arrivals',
        path: '/new-arrivals'
    },
    {
        id: 4,
        title: 'top selling',
        path: '/top-selling'
    },
]