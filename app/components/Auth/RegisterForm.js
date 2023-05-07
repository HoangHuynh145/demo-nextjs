'use client'

import { useState } from 'react'
import UserAPI from '@/app/lib/api/user'
import ErrorList from './ErrorList'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
    const router = useRouter()

    const [userRegister, setUserRegister] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState()

    const handleCheckRegister = async (e) => {
        e.preventDefault()
        if (!userRegister.email) {
            setErrors({ email: ["can't be blank"] })
        } else if (!userRegister.password) {
            setErrors({ password: ["can't be blank"] })
        } else {
            try {
                const { data, status } = await UserAPI.register(userRegister)
                if (status !== 200) {
                    setErrors(data.errors)
                }
                if (data) {
                    window.localStorage.setItem("user", JSON.stringify(data.user))
                    router.push("/")
                }
            } catch (error) {
                console.log(error)
            }

        }
    }

    return (
        <>
            {errors && <ErrorList errors={errors} />}
            <form className='col-span-6 col-start-4'>
                <input
                    placeholder='Username'
                    type='text'
                    className='border rounded-md py-3 px-6 leading-6 text-lg w-full'
                    value={userRegister.username}
                    onChange={(e) => setUserRegister({ ...userRegister, username: e.target.value })}
                />
                <input
                    placeholder='Email'
                    type='email'
                    className='border rounded-md py-3 px-6 leading-6 text-lg w-full my-4'
                    value={userRegister.email}
                    onChange={(e) => setUserRegister({ ...userRegister, email: e.target.value })}
                />
                <input
                    placeholder='Password'
                    type='password'
                    className='border rounded-md py-3 px-6 leading-6 text-lg w-full mb-4'
                    value={userRegister.password}
                    onChange={(e) => setUserRegister({ ...userRegister, password: e.target.value })}
                />
                <button
                    type='submit'
                    className='btn-auth'
                    onClick={handleCheckRegister}
                >
                    Sign up
                </button>
            </form>
        </>
    )
}

export default RegisterForm
