import React from 'react'
import { TagProvider } from './TagContext'
import { PageProvider } from './PageContext'

const GlobalContext = ({ children }) => {
    return (
        <TagProvider>
            <PageProvider>
                {children}
            </PageProvider>
        </TagProvider>
    )
}

export default GlobalContext
