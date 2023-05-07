'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Loader from '@/app/components/layout/Loader'
import ArticleItem from '@/app/components/Article/ArticleItem'
import { FiSettings } from "react-icons/fi"
import checkLogin from '@/app/lib/utils/CheckLogin'
import Link from 'next/link'
import useSWR from 'swr'
import fetcher from '@/app/lib/utils/Fetcher'

const UserProfile = ({ params }) => {
    const user = checkLogin()
    const username = params.uname
    const [author, setAuthor] = useState()
    const [favoritesArticle, setFavoritesArticle] = useState()

    const { data: authorData, error: authorError } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/profiles/${username}`, fetcher)
    const { data: articlesData, error: articlesError } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/articles?favorited=${username}`, fetcher)

    useEffect(() => {
        if (authorData) {
            setAuthor(authorData.profile)
        }

        if (articlesData) {
            setFavoritesArticle(articlesData.articles)
        }
    }, [authorData, articlesData])


    if (!author || !favoritesArticle) {
        return <Loader />
    }

    return (
        <>
            <div className='banner bg-slate-100 text-left shadow-none'>
                <div className='max-w-6xl mx-auto px-4 flex flex-col items-center'>
                    <Image
                        src={author?.image}
                        width={100}
                        height={100}
                        alt='Picture of the author'
                        className='rounded-full m-4'
                    />
                    <h4 className='text-black text-2xl font-bold'>{author.username}</h4>
                    <span className='mb-2 text-black/40'>{author.bio}</span>
                    {
                        author.username === user?.username && (
                            <Link href="/user/settings" className='self-end'>
                                <button className='text-black/40 flex gap-2 items-center py-1 px-2 rounded-md border border-black/20 text-sm hover:bg-slate-300/80'>
                                    <FiSettings />
                                    Edit Profile Settings
                                </button>
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto'>
                <ul className='flex items-center'>
                    <li
                        className='header-article-list active'
                    >
                        Favorited Articles
                    </li>
                </ul>
                {
                    favoritesArticle.length > 0 ? (
                        favoritesArticle.map(article => (
                            <div key={article.slug}>
                                <ArticleItem article={article} />
                            </div>
                        ))
                    ) : <p className='py-6'>No articles are here... yet.</p>
                }

            </div>
        </>
    )
}


export default UserProfile
