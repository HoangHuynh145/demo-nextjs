'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import UserAPI from '@/app/lib/api/user'
import ArticleAPI from '@/app/lib/api/article'
import Loader from '@/app/components/layout/Loader'
import ArticleItem from '@/app/components/Article/ArticleItem'
import { FiSettings } from "react-icons/fi"

const UserProfile = ({ params }) => {
    let user
    if (typeof localStorage !== 'undefined') {
        user = JSON.parse(localStorage.getItem('user'));
    }
    const username = params.uname
    const [author, setAuthor] = useState()
    const [favoritesArticle, setFavoritesArticle] = useState([])

    useEffect(() => {
        const getAuthorInfo = async () => {
            try {
                const res = await UserAPI.getProfile(username)
                setAuthor(res.data.profile)
            } catch (error) {
                console.log(error);
            }
        }

        const getAuthorArticles = async () => {
            try {
                const res = await ArticleAPI.getFavoriteArticles(username)
                setFavoritesArticle(res.data.articles)
            } catch (error) {
                console.log(error);
            }
        }
        getAuthorInfo()
        getAuthorArticles()
    }, [username])

    if (!author) {
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
                        author.username === user.username && (
                            <button className='text-black/40 self-end flex gap-2 items-center py-1 px-2 rounded-md border border-black/20 text-sm hover:bg-slate-300/80'>
                                <FiSettings />
                                Edit Profile Settings
                            </button>
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
