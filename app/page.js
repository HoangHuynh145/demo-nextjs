import Navbar from './components/layout/Navbar'
import ArticleList from './components/Article/ArticleList'
import Footer from './components/layout/Footer'
import MainLayout from "./layout"

export default function Home() {
  return (
    <MainLayout>
      <Navbar />
      <div className='p-8 bg-green-main text-center text-white shadow-inner shadow-black/20 mb-8'>
        <h1 className='pb-2'>conduit</h1>
        <span className='text-2xl font-light'>A place to share your knowledge.</span>
      </div>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-4 gap-7'>
          <div className='col-span-3'>
            <ArticleList />
          </div>
          <div className='col-span-1'>
            <div className='bg-gray-100 rounded-sm py-1.5 px-2.5'>
              <p className='mb-1'>Popular Tags</p>
              <ul className='flex flex-wrap gap-1'>
                <li className='bg-gray-500/80 hover:bg-gray-500 px-1.5 py-0.5 cursor-pointer rounded-full text-white text-xs'>implementations</li>
                <li className='bg-gray-500/80 hover:bg-gray-500 px-1.5 py-0.5 cursor-pointer rounded-full text-white text-xs'>welcome</li>
                <li className='bg-gray-500/80 hover:bg-gray-500 px-1.5 py-0.5 cursor-pointer rounded-full text-white text-xs'>introduction</li>
                <li className='bg-gray-500/80 hover:bg-gray-500 px-1.5 py-0.5 cursor-pointer rounded-full text-white text-xs'>codebaseShow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  )
}
