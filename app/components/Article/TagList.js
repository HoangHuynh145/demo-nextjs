import { usePageContext } from '@/app/context/PageContext'
import { useTagContext } from '@/app/context/TagContext'
import React from 'react'

const TagList = ({ tags }) => {
    const { setSelectedTag } = useTagContext()
    const { setCurrentPage, setMaxPageNumberLimit, setminPageNumberLimit } = usePageContext()


    const handleChangeTag = (tag) => {
        setSelectedTag(tag)
        setCurrentPage(1)
        setMaxPageNumberLimit(10)
        setminPageNumberLimit(0)
    }

    return (
        tags.map(tag => (
            <li
                key={tag}
                className='bg-gray-500/80 hover:bg-gray-500 px-1.5 py-0.5 cursor-pointer rounded-full text-white text-xs'
                onClick={() => handleChangeTag(tag)}
            >
                {tag}
            </li>
        ))
    )
}

export default TagList
