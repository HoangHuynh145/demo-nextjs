'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const pathname = usePathname();
    const routeUser = pathname.split('/')[2]

    return (
        <nav className='max-w-6xl mx-auto px-4 py-2 flex justify-between items-centerh-14'>
            <Link href="/">
                <span className='text-green-main text-2xl font-bold leading-9'>conduit</span>
            </Link>
            <ul className='flex items-center gap-4'>
                <Link href="/">
                    <li className={`py-1.5 cursor-pointer ${routeUser ? 'opacity-50' : 'opacity-100'}`}>Home</li>
                </Link>
                <Link href="/user/login">
                    <li className={`py-1.5 cursor-pointer ${routeUser === 'login' ? 'opacity-100' : 'opacity-50'}`}>
                        Sign in
                    </li>
                </Link>
                <Link href="/user/register">
                    <li className={`py-1.5 cursor-pointer ${routeUser === 'register' ? 'opacity-100' : 'opacity-50'}`}>
                        Sign up
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
