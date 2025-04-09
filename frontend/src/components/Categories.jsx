import React from 'react'
import { categories } from '../data'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='py-12 px-16 sm:px-5 flex flex-col items-center bg-gray-300'>
        <h1 className='text-slate-700 text-4xl font-extrabold mb-4'>Here is our Top Categories</h1>
        <p className='max-w-3xl text-lg'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Officia ab numquam eveniet saepe, obcaecati, animi beatae deleniti
              rerum dolorum enim odio neque omnis ad nobis adipisci distinctio quas suscipit dolor.
        </p>
        <div className='flex  flex-wrap py-12 justify-center gap-5'>
            {categories?.slice(1,7).map((category,index)=>(
                <Link to={"/"}>
                    <div className='relative flex justify-center items-center w-[250px] h-[200px] cursor-pointer ' key={index} >
                    <img src={category.img} alt={category.label} className='absolute w-full h-full  object-cover'></img>
                    <div className='absolute w-full h-full bg-black bg-opacity-55'></div>
                    <div className='relative text-white text-center'>
                        <div className='text-5xl '>{category.icon}</div>
                        <p className='font-semibold'>{category.label}</p>
                    </div>
                    </div>
                </Link>
            ))}
            </div>
    </div>
  )
}

export default Categories