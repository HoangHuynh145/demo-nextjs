'use client'

import { useState } from 'react'
import { FaHeart } from "react-icons/fa"
import Image from 'next/image'
import { useTagContext } from '@/app/context/TagContext'
import Link from 'next/link'
import ArticleAPI from '@/app/lib/api/article'

const ArticleItem = ({ article }) => {
    let user
    if (typeof window !== 'undefined') {
        user = JSON.parse(window.localStorage.getItem('user'))
    }
    const { setSelectedTag } = useTagContext()
    const [favoriteState, setFavoriteState] = useState({
        favoritesCount: article.favoritesCount,
        isFavorite: article.favorited
    })


    const handleUpdateFavorite = async () => {
        if (user) {
            setFavoriteState(prevState => ({
                ...prevState,
                favoritesCount: prevState.isFavorite ? prevState.favoritesCount - 1 : prevState.favoritesCount + 1,
                isFavorite: !prevState.isFavorite
            }))
            try {
                if (favoriteState.isFavorite) {
                    const res = await ArticleAPI.removeFavoriteArticle(article.slug, user.token)
                    console.log(res.data)
                } else {
                    const res = await ArticleAPI.addFavoriteArticle(article.slug, user.token)
                    console.log(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('dang nhap')
        }
    }

    return (
        <article className='border-t border-slate-500/50 py-6 px-2'>
            <div className='flex justify-between items-center mb-4'>
                <div className='author-container'>
                    <Image
                        src={article.author.image}
                        width={32}
                        height={32}
                        alt='Picture of the author'
                        className='rounded-full '
                    />
                    <div className='ml-1'>
                        <Link href={`/profile/${article.author.username}`}>
                            <span className='text-green-main hover:underline hover:text-green-main-dark cursor-pointer'>
                                {article.author.username}
                            </span>
                        </Link>
                        <p className='text-xs text-slate-500/50'>{article.createdAt}</p>
                    </div>
                </div>
                <button
                    className={`article-btn-like ${favoriteState?.isFavorite && 'bg-green-main text-white'}`}
                    onClick={handleUpdateFavorite}
                >
                    <FaHeart size={14} />
                    {favoriteState?.favoritesCount}
                </button>
            </div>
            <div>
                <Link href={`article/${article.slug}`}>
                    <p className='text-2xl text-black font-semibold mb-0.5 line-clamp-2'>
                        {article.title}
                    </p>
                </Link>
                <Link href={`article/${article.slug}`}>
                    <p className='line-clamp-2 text-slate-500/50 mb-4'>
                        {article.description}
                    </p>
                </Link>
                <div className='flex justify-between items-center text-xs text-slate-500/50'>
                    <Link href={`article/${article.slug}`}>
                        <span className=' mb-4'>Read more...</span>
                    </Link>
                    <ul className='flex items-center gap-1'>
                        {article.tagList.map(tag => (
                            <li
                                key={tag}
                                className='px-1.5 rounded-full border border-slate-400/70 leading-5 cursor-pointer hover:border-green-main'
                                onClick={() => setSelectedTag(tag)}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default ArticleItem
