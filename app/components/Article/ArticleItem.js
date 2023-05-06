import React from 'react'
import { FaHeart } from "react-icons/fa"
import Image from 'next/image'

const dummyAvt = "https://api.realworld.io/images/demo-avatar.png"

const ArticleItem = () => {
    return (
        <article className='border-t border-slate-500/50 py-6 px-2'>
            <header className='flex justify-between items-center mb-4'>
                <div className='flex items-center'>
                    <Image
                        src={dummyAvt}
                        width={32}
                        height={32}
                        alt='Picture of the author'
                        className='rounded-full '
                    />
                    <div className='ml-1'>
                        <span className='text-green-main hover:underline hover:text-green-main-dark cursor-pointer '>Anah Benešová</span>
                        <p className='text-xs text-slate-500/50'>Fri Dec 09 2022</p>
                    </div>
                </div>
                <button
                    className='px-2 py-1 rounded-sm flex items-center border border-green-main text-sm gap-1 text-green-main leading-4 h-7 hover:text-white hover:bg-green-main'
                >
                    <FaHeart size={14} />
                    1054
                </button>
            </header>
            <div>
                <p className='text-2xl text-black font-semibold mb-0.5'>
                    If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!
                </p>
                <p className='line-clamp-2 text-slate-500/50 mb-4'>
                    Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut cupiditate est facere omnis possimus. Tenetur similique nemo illo soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem soluta vel est omnis.
                </p>
                <div className='flex justify-between items-center text-xs text-slate-500/50'>
                    <span className=' mb-4'>Read more...</span>
                    <ul className='flex items-center gap-1'>
                        <li className='px-1.5 rounded-full border border-slate-400/70 leading-5 cursor-pointer'>rerum</li>
                        <li className='px-1.5 rounded-full border border-slate-400/70 leading-5 cursor-pointer'>maiores</li>
                        <li className='px-1.5 rounded-full border border-slate-400/70 leading-5 cursor-pointer'>omnis</li>
                        <li className='px-1.5 rounded-full border border-slate-400/70 leading-5 cursor-pointer'>quae</li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default ArticleItem
