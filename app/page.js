'use client'

import ArticleList from './components/Article/ArticleList'
import ArticleAPI from './lib/api/article'
import { useEffect, useState } from 'react'
import Loader from './components/layout/Loader'
import TagList from './components/Article/TagList'

export default function Home() {
  const [tags, setTags] = useState([])

  useEffect(() => {
    const getArticleTags = async () => {
      try {
        const res = await ArticleAPI.getTags()
        setTags(res.data.tags)
      } catch (error) {
        console.log(error)
      }
    }
    getArticleTags()
  }, [])

  return (
    <>
      <div className='banner bg-green-main'>
        <h1 className='pb-2'>conduit</h1>
        <span className='text-2xl font-light'>A place to share your knowledge.</span>
      </div>
      <div className='max-w-6xl mx-auto px-8'>
        <div className='grid grid-cols-4 gap-7'>
          <div className='col-span-3'>
            <ArticleList />
          </div>
          <div className='col-span-1'>
            <div className='bg-gray-100 rounded-sm py-1.5 px-2.5'>
              <p className='mb-1'>Popular Tags</p>
              <ul className='flex flex-wrap gap-1'>
                {tags.length > 0 ? <TagList tags={tags} /> : <Loader />}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
