import React from 'react'
import Addnote from './Addnote'
import Noteitem from './Noteitem'

export default function Notes() {
  return (
    <div className='container mx-auto my-10'>
      <Addnote />
      <Noteitem/>
    </div>
  )
}
