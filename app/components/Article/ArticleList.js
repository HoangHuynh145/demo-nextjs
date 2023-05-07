'use client'

import { useState, useEffect } from 'react'
import ArticleItem from './ArticleItem'
import ArticleAPI from '../../lib/api/article'
import Pagination from '../layout/Pagination'
import { useTagContext } from '@/app/context/TagContext'
import Loader from '../layout/Loader'


const ArticleList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [articles, setArticles] = useState([])
    const [toltalPages, setToltalPages] = useState()
    const { selectedTag, setSelectedTag } = useTagContext()


    useEffect(() => {
        setArticles([])
        const getArticles = async () => {
            try {
                let res
                if (selectedTag !== '') {
                    res = await ArticleAPI.Articles((currentPage - 1) * 10, selectedTag)
                } else {
                    res = await ArticleAPI.Articles(currentPage * 10)
                }
                setArticles(res.data.articles)
                setToltalPages(Math.ceil((res.data.articlesCount) / 10))
            } catch (error) {
                console.log(error)
            }
        }
        getArticles()
    }, [currentPage, selectedTag])

    if (articles.length === 0) {
        return <Loader />
    }

    return (
        <>
            <ul className='flex items-center'>
                <li
                    className='header-article-list cursor-pointer'
                    onClick={() => setSelectedTag('')}
                >
                    Global Feed
                </li>
                {
                    selectedTag && (
                        <li className='py-2 px-4 border-b-2 border-green-main max-w-max text-green-main'>
                            #{selectedTag}
                        </li>
                    )
                }
            </ul>
            {articles.map(article => <div key={article.slug}><ArticleItem article={article} /></div>)}
            <ul className='flex'>
                <Pagination
                    totalPage={toltalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </ul>
        </>
    )
}

export default ArticleList
