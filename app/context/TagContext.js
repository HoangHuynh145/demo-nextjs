'use client'

import { createContext, useContext, useState } from 'react'

const TagContext = createContext()

const useTagContext = () => useContext(TagContext)

const TagProvider = ({ children }) => {
    const [selectedTag, setSelectedTag] = useState('')

    const values = {
        selectedTag, setSelectedTag
    }

    return (
        <TagContext.Provider value={values}>
            {children}
        </TagContext.Provider>
    )
}

export { TagProvider, useTagContext }
