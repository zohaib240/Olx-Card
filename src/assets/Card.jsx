import React from 'react'

const Card = ({img,title,description,price,location}) => {
  return (
    
     <div className='card'>
    <div className='img-card'><img  src={img} alt="noimg" /></div>
    <div className='m-2 flex justify-between'>
    <p className=' font-bold' >R.s {price}</p>
    <i class="fa-regular fa-heart"></i>
    </div>
    <h1 className='m-2 font-bold text-base'>{title}</h1>
    <p className='m-2'>{description}</p>
    <h2 className='m-3 text-gray-500 '>{location}</h2>

    
    </div>
    
  )
}

export default Card