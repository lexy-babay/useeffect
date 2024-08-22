import React, { useEffect, useState } from 'react'

function Her() {
    let [can, setcan] = useState(null)

    useEffect (()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setcan(json))
        .catch( err=>console.log('Error'))
    },[])

  return (
    <div className='h-[auto] bg-gray-400 grid grid-cols-5 gap-3'>
   { can ?
    can.map((girl)=>(

        <div className='bg-black text-white p-3'>
        <div className='h-[70%]'>
            <img src={girl.image} className='h-[180px] w-[100%]' />
        </div>
        <h1 className='h-[20%] bg-gray-400 text-black text-ellipsis overflow-hidden whitespace-nowrap flex items-center'>Title:{girl.title}</h1>
        <p>Price: ${girl.price}</p>

    </div>
    )) : <p>loading...</p>
   }
    </div>
  
  )
}

export default Her