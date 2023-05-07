import RegisterForm from '@/app/components/Auth/RegisterForm'
import MainLayout from '@/app/components/layout/MainLayout'
import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <div className='max-w-6xl mx-auto grid grid-cols-12 text-center mt-6'>
            <div className='col-span-12 mb-4'>
                <p className='text-4xl mb-2'>Sign up</p>
                <Link href="/user/login">
                    <span className='text-green-main hover:underline hover:text-green-main-dark cursor-pointer'>
                        Have an account?
                    </span>
                </Link>
            </div>
            <div className='col-span-6 col-start-4'>
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register
