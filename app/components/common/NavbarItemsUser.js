import Link from 'next/link'
import React from 'react'
import { FiSettings } from "react-icons/fi"

const NavbarItemsUser = ({ routeUser }) => {
    const user = JSON.parse(localStorage.getItem('user')).user
    const { username } = user

    return (
        <>
            <Link href="/user/settings">
                <li className={`py-1.5 cursor-pointer flex items-center gap-1 ${routeUser === 'settings' ? 'opacity-100' : 'opacity-50'}`}>
                    <FiSettings size={14} />
                    Settings
                </li>
            </Link>
            <Link href={`/profile/${username}`}>
                <li className={`py-1.5 cursor-pointer ${routeUser === username ? 'opacity-100' : 'opacity-50'}`}>
                    {username}
                </li>
            </Link>
        </>
    )
}

export default NavbarItemsUser
