'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavbarItemsAuth from '../common/NavbarItemsAuth';
import NavbarItemsUser from '../common/NavbarItemsUser';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user')).user
    const pathname = usePathname();
    const routeUser = pathname.split('/')[2]


    return (
        <nav className='max-w-6xl mx-auto px-4 py-2 flex justify-between items-center h-14'>
            <Link href="/">
                <span className='text-green-main text-2xl font-bold leading-9'>conduit</span>
            </Link>
            <ul className='flex items-center gap-4'>
                <Link href="/">
                    <li className={`py-1.5 cursor-pointer ${routeUser ? 'opacity-50' : 'opacity-100'}`}>Home</li>
                </Link>
                {
                    user ? <NavbarItemsUser routeUser={routeUser} /> : <NavbarItemsAuth routeUser={routeUser} />
                }
            </ul>
        </nav>
    )
}

export default Navbar
