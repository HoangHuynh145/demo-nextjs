'use client'
import { useState } from 'react'
import UserAPI from '../../lib/api/user'
import ErrorList from './ErrorList'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const router = useRouter()

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState()

    const handleCheckLogin = async (e) => {
        e.preventDefault()
        if (!userLogin.email) {
            setErrors({ email: ["can't be blank"] })
        } else if (!userLogin.password) {
            setErrors({ password: ["can't be blank"] })
        } else {
            try {
                const { data, status } = await UserAPI.login(userLogin)
                if (status !== 200) {
                    setErrors(data.errors)
                }
                if (data) {
                    localStorage.setItem("user", JSON.stringify(data))
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
            <form>
                <input
                    placeholder='Email'
                    type='email'
                    className='border rounded-md py-3 px-6 text-lg leading-6 w-full'
                    value={userLogin.email}
                    onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
                    required
                />
                <input
                    placeholder='Password'
                    type='password'
                    className='border rounded-md py-3 px-6 text-lg leading-6 w-full my-4'
                    value={userLogin.password}
                    onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
                    required
                />

                <button
                    type='submit'
                    className='btn-auth'
                    onClick={handleCheckLogin}
                >
                    Sign in
                </button>
            </form>
        </>
    )
}

export default LoginForm
