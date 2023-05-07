'use client'

import { marked } from 'marked';
import ArticleAPI from '@/app/lib/api/article';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'
import Loader from '@/app/components/layout/Loader';
import Link from 'next/link';

const ArticleDetail = ({ params }) => {
    const [article, setArticle] = useState()

    useEffect(() => {
        const getArticleDetal = async () => {
            try {
                const res = await ArticleAPI.Article(params.aid)
                setArticle(res.data.article)
            } catch (error) {
                console.log(error)
            }
        }
        getArticleDetal()
    }, [params])

    if (!article) {
        return <Loader />
    }

    return (
        <>
            <div className='banner bg-slate-750 text-white text-left'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h1 className='text-5xl font-semibold'>{article.title}</h1>
                    <div className='author-container mt-8'>
                        <Image
                            src={article.author.image}
                            width={32}
                            height={32}
                            alt='Picture of the author'
                            className='rounded-full '
                        />
                        <div className='ml-1'>
                            <Link href={`/profile/${article.author.username}`}>
                                <span className=' hover:underline cursor-pointer'>
                                    {article.author.username}
                                </span>
                            </Link>
                            <p className='text-xs text-slate-100/60'>{article.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto'>
                <p className='text-xl'>{article.body}</p>
                <ul className='flex gap-1 items-center text-xs text-slate-400/50 mt-8 mb-4'>
                    {article.tagList.map(tag => (
                        <li
                            key={tag}
                            className='px-1.5 rounded-full border border-slate-400/50 leading-5 cursor-default'
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <hr className='my-4 bg-slate-600/30 h-px' />
            </div>
        </>
    )
}

export default ArticleDetail

