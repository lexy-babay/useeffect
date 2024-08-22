import React, { useEffect, useState } from 'react'

function What() {
    let [cane, setcane] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => setcane(json))
        .catch( err=>console.log('Error'))
    },[])
  return (
    <div className='h-[auto] bg-teal-600 grid grid-cols-5 gap-3'>
   { cane ? cane.map((girl)=>(

        <div className='bg-black text-white p-3'>
        <div className='h-[70%]'>
            <img src={girl.thumbnailUrl} className='h-[180px] w-[100%]' />
        </div>
        <h1 className='h-[20%] bg-slate-200 text-black text-ellipsis overflow-hidden whitespace-nowrap flex items-center'>Title : {girl.title}</h1>
        {/* <p>Price  : {girl.title}</p> */}

    </div>
    )) : <p>loading...</p>
   }
    </div>
  )
}

export default What