'use client'

import { useState } from 'react'
import ArticleItem from './ArticleItem'
import ArticleAPI from '../../lib/api/article'

const ArticleList = ({ articles }) => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div>
            <ul>
                <li className='py-2 px-4 border-b-2 border-green-main max-w-max text-green-main'>
                    Global Feed
                </li>
            </ul>
            {[1, 2, 3, 4, 5].map(numb => <div key={numb}><ArticleItem /></div>)}
            <ul className='flex'>
                <li className='pagination-items rounded-tl-md rounded-bl-md'>
                    {"<<"}
                </li>
                {currentPage !== 1 && (
                    <li className='pagination-items'>{"<"}</li>
                )}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(page => (
                    <li
                        className={`pagination-items ${currentPage === page ? 'active' : ''}`}
                        key={page}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </li>
                ))}
                {currentPage !== 10 && (
                    <li className='pagination-items'>{">"}</li>
                )}
                <li className='pagination-items rounded-tr-md rounded-br-md'>
                    {">>"}
                </li>
            </ul>
        </div>
    )
}


export const getStaticProps = async () => {
    try {
        const res = await ArticleAPI.Articles()
        const articles = res.data
        return {
            props: {
                articles,
            },
        }
    } catch (error) {
        console.log(error)
        return {
            props: {}
        }
    }
}

export default ArticleList
