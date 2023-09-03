import React, { useState } from 'react'
import Notes from './Notes'
export default function Home() {
  const [zIndex,setZIndex] = useState(false);
  const updateIndex = ()=>{
  setZIndex(zIndex?false:true);
  }
  return (
    <div className='relative '>
      <Notes updateIndex={updateIndex} />
      <div className={`bg-gray-100 opacity-50 w-full h-full absolute top-0 right-0 ${zIndex?"z-40":"-z-40"}`}>
      </div>
    </div>
  )
}
