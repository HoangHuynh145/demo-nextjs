'use client'

import { useState, useEffect } from 'react'
import ArticleItem from './ArticleItem'
import Pagination from '../layout/Pagination'
import { useTagContext } from '@/app/context/TagContext'
import Loader from '../layout/Loader'
import useSWR from 'swr'
import fetcher from '@/app/lib/utils/Fetcher'

const ArticleList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [articles, setArticles] = useState([])
    const [toltalPages, setToltalPages] = useState()
    const { selectedTag, setSelectedTag } = useTagContext()
    const [fetchUrl, setFetchUrl] = useState('')
    const { data, error } = useSWR(fetchUrl, fetcher)

    useEffect(() => {
        if (selectedTag !== '') {
            setFetchUrl(`${process.env.NEXT_PUBLIC_BASE_URL}/articles?tag=${selectedTag}&limit=10&offset=${(currentPage - 1) * 10}`)
        } else {
            setFetchUrl(`${process.env.NEXT_PUBLIC_BASE_URL}/articles?limit=10&offset=${(currentPage - 1) * 10}`)
        }
    }, [currentPage, selectedTag])


    useEffect(() => {
        if (data) {
            setArticles(data.articles)
            setToltalPages(Math.ceil((data.articlesCount) / 10))
        }
    }, [data])

    if (!data) {
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
