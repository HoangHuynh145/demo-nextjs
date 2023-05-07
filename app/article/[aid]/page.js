'use client'

import { marked } from 'marked';
import ArticleAPI from '@/app/lib/api/article';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'
import Loader from '@/app/components/layout/Loader';
import Link from 'next/link';

const dummyUrl = "https://api.realworld.io/images/demo-avatar.png"

const dummyContent = "Quia quo iste et aperiam voluptas consectetur a omnis et.\nDolores et earum consequuntur sunt et.\nEa nulla ab voluptatem dicta vel. Temporibus aut adipisci magnam aliquam eveniet nihil laudantium reprehenderit sit.\nAspernatur cumque labore voluptates mollitia deleniti et. Quos pariatur tenetur.\nQuasi omnis eveniet eos maiores esse magni possimus blanditiis.\nQui incidunt sit quos consequatur aut qui et aperiam delectus.\nPraesentium quas culpa.\nEaque occaecati cumque incidunt et. Provident saepe omnis non molestiae natus et.\nAccusamus laudantium hic unde voluptate et sunt voluptatem.\nMollitia velit id eius mollitia occaecati repudiandae. Voluptatum tempora voluptas est odio iure odio dolorem.\nVoluptatum est deleniti explicabo explicabo harum provident quis molestiae. Sed dolores nostrum quis. Aut ipsa et qui vel similique sed hic a.\nVoluptates dolorem culpa nihil aut ipsam voluptatem. Cupiditate officia voluptatum.\nTenetur facere eum distinctio animi qui laboriosam.\nQuod sed voluptatem et cumque est eos.\nSint id provident suscipit harum odio et. Facere beatae delectus ut.\nPossimus voluptas perspiciatis voluptatem nihil sint praesentium.\nSint est nihil voluptates nesciunt voluptatibus temporibus blanditiis.\nOfficiis voluptatem earum sed. Deserunt ab porro similique est accusamus id enim aut suscipit.\nSoluta reprehenderit error nesciunt odit veniam sed.\nDolore optio qui aut ab.\nAut minima provident eius repudiandae a quibusdam in nisi quam."

const ArticleDetail = ({ params }) => {
    const [article, setArticle] = useState()

    useEffect(() => {
        const getArticleDetal = async () => {
            try {
                const res = await ArticleAPI.Article(params.aid)
                setArticle(res.data.article)
            } catch (error) {
                console.log(error)
            }
        }
        getArticleDetal()
    }, [params])

    if (!article) {
        return <Loader />
    }

    return (
        <>
            <div className='banner bg-slate-750 text-white text-left'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h1 className='text-5xl font-semibold'>{article.title}</h1>
                    <div className='author-container mt-8'>
                        <Image
                            src={article.author.image}
                            width={32}
                            height={32}
                            alt='Picture of the author'
                            className='rounded-full '
                        />
                        <div className='ml-1'>
                            <Link href={`/profile/${article.author.username}`}>
                                <span className=' hover:underline cursor-pointer'>
                                    {article.author.username}
                                </span>
                            </Link>
                            <p className='text-xs text-slate-100/60'>{article.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto'>
                <p className='text-xl'>{article.body}</p>
                <ul className='flex gap-1 items-center text-xs text-slate-400/50 mt-8 mb-4'>
                    {article.tagList.map(tag => (
                        <li
                            key={tag}
                            className='px-1.5 rounded-full border border-slate-400/50 leading-5 cursor-default'
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <hr className='my-4 bg-slate-600/30 h-px' />
            </div>
        </>
    )
}

export default ArticleDetail

