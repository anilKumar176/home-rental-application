import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-6xl mx-auto'>
     <div className='max-w-6xl lg:mx-auto p-5 md:px-10 lg:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2 '>
       <div className='flex flex-col justify-center gap-8'>
        <h1 className='font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]'>RentRite :feel at Home, Whatever You are !</h1>
        <p className='text-[10px] md:text-[20px] font-normal leading-[24px] lg:leading-[40px] tracking-[1%] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates perspiciatis exercitationem at.
             Quos obcaecati perspiciatis veritatis culpa praesentium est, et explicabo dolore quae accusantium modi ipsum omnis consequuntur cumque, magnam nemo quam alias nam amet aspernatur veniam consequatur autem sed?
             </p>
        </div>
        <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVudGFsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
        alt=''
        width={800}
        height={800}
        className='max-h-[70vh]  object-contain object-center '/>
     </div>
</div>
  )
}

export default Hero