import React from 'react'

const Footer = () => {
    return (
        <footer className='absolute w-full bottom-0'>
            <div className='mt-12 py-4 bg-gray-100 px-8'>
                <div className='max-w-6xl mx-auto flex items-center'>
                    <span className='text-green-main font-bold leading-1'>conduit</span>
                    <p className='text-slate-500/50 text-sm ml-2'>An interactive learning project from Thinkster. Code & design licensed under MIT.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
