import React from 'react';
import {FaRegHeart, FaHeart} from 'react-icons/fa';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Movie from './Movie';

export default function Row({title, fetchURL}) {
    const [movies,setMovie]=useState([]);
    const [like,setLike]=useState(false);
    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovie(response.data.results);
          
        })
    })
   

  return (
    <>
   <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
   <div className='relative flex items-center'>
    <div id={'slider'}>
        {movies.map((item,id)=>(
           <Movie key={id} item = {item}/>
            
        ))}

    </div>
   </div>

  
    </>
  )
}
