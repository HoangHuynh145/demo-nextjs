import { useTagContext } from '@/app/context/TagContext'
import React from 'react'

const TagList = ({ tags }) => {
    const { setSelectedTag } = useTagContext()

    return (
        tags.map(tag => (
            <li
                key={tag}
                className='bg-gray-500/80 hover:bg-gray-500 px-1.5 py-0.5 cursor-pointer rounded-full text-white text-xs'
                onClick={() => setSelectedTag(tag)}
            >
                {tag}
            </li>
        ))
    )
}

export default TagList
