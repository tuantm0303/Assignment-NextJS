import Link from 'next/link'
import React from 'react'
import useCategories from '../../hooks/use-category'

type Props = {}

const ProductPage = (props: Props) => {
  const {data,error} = useCategories()
  if(!data) return <div>Loading...</div>
  if(error) return <div>Failed to load</div>
  return (
    <div className='pt-28 bg-gray-100'>
      <div className='w-4/6 mx-auto grid grid-cols-12 px-12 py-24 gap-4'>
        <div className='col-span-3 bg-white border border-gray-100 p-4'>
          <div className=''>
            <div className='flex justify-between'>
              <div className='col-span-2'> 
                <h1 className='text-2xl font-bold font-serif'>CATEGORY</h1>
              </div>
              <div className='col-span-2'> 
                <img src='https://cdn-icons-png.flaticon.com/512/134/134210.png' width="16px"/>
              </div>
            </div>
            <hr className='py-2'></hr>
            
            <nav className='w-3/4'>
              {data.map((item:any) => {
                return (
                    <><li key={item._id} className='inline-block font-bold font-sans hover:text-red-700'><Link href={`/category/${item._id}`}>{item.name}</Link></li><br></br></>
                )
              })}
              
              
            </nav>
          </div>
          

          
          
        </div>
        <div className='col-span-9 '>
        <div className='grid grid-cols-8 gap-2 justify-around flex-wrap'>
            <div className="col-span-2 my-8 group relative hover:shadow-lg hover:shadow-zinc-600 hover:translate-y-[-15px] duration-500 ease-in-out transition-all bg-white rounded-md overflow-hidden">
              <div className='z-30 translate-x-[-35px] delay-100 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute shadow-inner rounded-lg bg-zinc-300'>
                <Link href="/product">
                  <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>

              </div>

              <div className='z-30 translate-x-[-35px] delay-150 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[33px] shadow-inner rounded-lg bg-zinc-300'>
                <Link href="/product">
                  <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </Link>

              </div>

              <div className='z-30 translate-x-[-35px] delay-200 group-hover:translate-x-[0px] ease-in-out transition-all ml-1 mt-1 absolute top-[66px] shadow-inner rounded-lg bg-zinc-300'>
                <Link href="/product">
                  <svg xmlns="http://www.w3.org/2000/svg" className="hover:text-white hover:bg-red-500 rounded-lg h-7 w-7 text-slate-400 p-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </Link>

              </div>

              <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 overflow-hidden  lg:h-80 lg:aspect-none">
                <img src="https://bookbuy.vn/Res/Images/Product/9-mau-chia-ly_117801_1.PNG" alt="" className="rounded-md px-12 pt-8 pb-4 overflow-hidden grayscale group-hover:grayscale-0  group-hover:scale-110 w-full h-full object-center object-cover ease-in-out transform transition-all lg:w-full lg:h-full" />
              </div>

              <div className="mt-1 ">
                <div>
                  <h3 className="text-base my-1 text-gray-800 font-medium text-center">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    9 màu chia ly
                  </h3>
                </div>
                <div className='mb-2 flex justify-around'>
                  <div><del className='text-red-500'><p className="mt-1 italic text-sm text-red-500">200 000 VNĐ</p></del></div>
                  <div><p className="text-base font-medium italic text-gray-500">150 000 VNĐ</p></div>
                </div>

              </div>
            </div>
            
            
           
            
            
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage