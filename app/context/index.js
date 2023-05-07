import React from 'react'
import { TagProvider } from './TagContext'

const GlobalContext = ({ children }) => {
    return (
        <TagProvider>
            {children}
        </TagProvider>
    )
}

export default GlobalContext
