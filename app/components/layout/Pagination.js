'use client'

import { useEffect, useState, useMemo } from 'react'

const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
    const pages = useMemo(() => {
        const pagesNumber = []
        for (let i = 1; i <= totalPage; i++) {
            pagesNumber.push(i)
        }
        return pagesNumber
    }, [totalPage])

    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10)
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0)
    const [currentItems, setCurrentItems] = useState(pages.slice(0, 10))

    const renderPagination = pages?.map(page => {
        if (page > minPageNumberLimit && page <= maxPageNumberLimit) {
            return (
                <li
                    className={`pagination-items ${currentPage === page ? 'active' : ''}`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </li>
            )
        } else {
            return null
        }
    })


    const renderPrevBtn = () => {
        if (minPageNumberLimit !== 0) {
            return (
                <li
                    className='pagination-items'
                    onClick={() => setCurrentPage(prev => prev - 1)}
                >
                    {"<"}
                </li>
            )
        } else {
            return null
        }
    }

    const renderNextBtn = () => {
        if (!currentItems.includes(pages[pages.length - 1])) {
            return (
                <li
                    className='pagination-items'
                    onClick={() => setCurrentPage(prev => prev + 1)}
                >
                    {">"}
                </li>
            )
        } else {
            return null
        }
    }

    useEffect(() => {
        if (currentPage === maxPageNumberLimit) {
            setMaxPageNumberLimit(prev => prev + 8)
            setminPageNumberLimit(prev => prev + 8)
        }
        if (currentPage - 1 === minPageNumberLimit && currentPage !== 1) {
            setMaxPageNumberLimit(prev => prev - 8)
            setminPageNumberLimit(prev => prev - 8)
        }
        setCurrentItems(pages.slice(minPageNumberLimit, maxPageNumberLimit))
    }, [currentPage, maxPageNumberLimit, minPageNumberLimit, pages])

    if (pages.length > 1) {
        return (
            <>
                <li
                    className='pagination-items rounded-tl-md rounded-bl-md'
                    onClick={() => setCurrentPage(currentItems[0])}
                >
                    {"<<"}
                </li>
                {renderPrevBtn()}
                {renderPagination}
                {renderNextBtn()}
                <li
                    className='pagination-items rounded-tr-md rounded-br-md'
                    onClick={() => setCurrentPage(currentItems[currentItems.length - 1])}
                >
                    {">>"}
                </li>
            </>
        )
    }
}

export default Pagination
