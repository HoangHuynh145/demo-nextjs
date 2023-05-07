import Link from 'next/link'
import React from 'react'

const NavbarItemsAuth = ({ routeUser }) => {
    return (
        <>
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
        </>
    )
}

export default NavbarItemsAuth
