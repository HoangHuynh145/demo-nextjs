'use client'

import { useState, useEffect } from 'react'
import ArticleItem from './ArticleItem'
import Pagination from '../layout/Pagination'
import { useTagContext } from '@/app/context/TagContext'
import Loader from '../layout/Loader'
import useSWR from 'swr'
import fetcher from '@/app/lib/utils/Fetcher'
import { usePageContext } from '@/app/context/PageContext'

const ArticleList = () => {
    const { currentPage, setTotalPages } = usePageContext()
    const [articles, setArticles] = useState([])
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
            setTotalPages(Math.ceil((data.articlesCount) / 10))
        }
    }, [data, setTotalPages])

    if (!data) {
        return <Loader />
    }

    return (
        <>
            <ul className='flex items-center'>
                <li
                    className={`header-article-list ${selectedTag === '' && 'active'}`}
                    onClick={() => setSelectedTag('')}
                >
                    Global Feed
                </li>
                {
                    selectedTag && (
                        <li className='header-article-list active'>
                            #{selectedTag}
                        </li>
                    )
                }
            </ul>
            {articles.map(article => <div key={article.slug}><ArticleItem article={article} /></div>)}
            <ul className='flex'>
                <Pagination />
            </ul>
        </>
    )
}



export default ArticleList
