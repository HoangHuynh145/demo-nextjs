'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import UserAPI from '@/app/lib/api/user'

const Settings = ({ params }) => {
    let user
    if (typeof localStorage !== 'undefined') {
        user = JSON.parse(localStorage.getItem('user'));
    }
    const router = useRouter()

    const [userInfo, setUserInfo] = useState({
        bio: user ? user.bio : '',
        email: user ? user.email : '',
        image: user ? user.image : '',
        username: user ? user.username : '',
        password: ''
    })

    const handleLogout = () => {
        localStorage.removeItem('user')
        router.push("/")
    }

    const handleChangeProfile = async (e) => {
        e.preventDefault()
        try {
            const userUpdate = { ...userInfo }
            if (!userUpdate.password) {
                delete user.password
            }
            const res = await UserAPI.updateProfile(userUpdate, user.token)
            if (res.status === 200) {
                const newUser = { ...userUpdate, token: user.token }
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('user', JSON.stringify(newUser))
                }
                router.push(`/profile/${userUpdate.username}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='max-w-xl mx-auto mt-6 '>
            <h3 className='text-4xl text-center mb-2'>Your Settings</h3>
            <form className='space-y-4 flex flex-col mt-4'>
                <input
                    type='text'
                    placeholder='URL or profile picture'
                    className='border border-slate-500/30 rounded-md py-2 px-3'
                    value={userInfo.image}
                    onChange={(e) => setUserInfo({ ...userInfo, image: e.target.value })}
                />

                <input
                    type='text'
                    placeholder='Username'
                    className='border border-slate-500/30 rounded-md py-2 px-3'
                    value={userInfo.username}
                    onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
                />

                <textarea
                    placeholder='Short bio about you'
                    className='border border-slate-500/30 rounded-md py-2 px-3 outline-none'
                    value={userInfo.bio}
                    onChange={(e) => setUserInfo({ ...userInfo, bio: e.target.value })}
                />

                <input
                    type='email'
                    placeholder='Email'
                    className='border border-slate-500/30 rounded-md py-2 px-3'
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                />

                <input
                    type='password'
                    placeholder='New Password'
                    className='border border-slate-500/30 rounded-md py-2 px-3'
                    value={userInfo.password}
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                />

                <button type='submit' className='btn-auth self-end' onClick={handleChangeProfile}>
                    Update Settings
                </button>
            </form>
            <hr className='my-4 bg-slate-600/30 h-px' />
            <button
                className='py-2 px-4 border border-red-700 text-red-700 rounded-md hover:bg-red-700 hover:text-white'
                onClick={handleLogout}
            >
                Or click here to logout.
            </button>
        </div>
    )
}

export default Settings
