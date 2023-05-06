import Navbar from '../../components/layout/Navbar'
import Link from 'next/link'
import LoginForm from '../../components/Auth/LoginForm'

const Login = () => {

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto grid grid-cols-12 text-center mt-6'>
                <div className='col-span-12 mb-4'>
                    <p className='text-4xl mb-2'>Sign in</p>
                    <Link href="/user/register">
                        <span className='text-green-main hover:underline hover:text-green-main-dark cursor-pointer'>
                            Need an account?
                        </span>
                    </Link>
                </div>
                <div className='col-span-6 col-start-4'>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login
