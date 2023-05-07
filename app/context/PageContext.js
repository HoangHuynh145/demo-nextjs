'use client'

import { createContext, useContext, useState } from 'react'

const PageContext = createContext()

const usePageContext = () => useContext(PageContext)

const PageProvider = ({ children }) => {
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10)
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()

    const values = {
        maxPageNumberLimit, setMaxPageNumberLimit,
        minPageNumberLimit, setminPageNumberLimit,
        currentPage, setCurrentPage,
        currentPage, setCurrentPage,
        totalPages, setTotalPages
    }

    return (
        <PageContext.Provider value={values}>
            {children}
        </PageContext.Provider>
    )
}

export { PageProvider, usePageContext }
