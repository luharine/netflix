
import React from 'react'
import {FaRegHeart, FaHeart} from 'react-icons/fa';



export default function Movie({item}) {
  const like =true;
  return (
    
 <div  className='w-[160px] sm:w-[200px md:w-[240px] lg:w-[280px] relative p-2 inline-block cursor-pointer'>
 <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}   alt={item?.title}/>
 <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100'>
 <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
  <p className='absolute top-2 left-2 text-gray-300' >
    {like?< FaHeart />:<FaRegHeart/>}
    </p>
 </div>

</div>
  )
}









