import React from 'react'
import Addnote from './Addnote'
import Noteitem from './Noteitem'

export default function Notes(props) {
  const {updateIndex} = props;
  return (
    <div className=' container mx-auto my-9'>
      <Addnote/>
      <Noteitem updateIndex={updateIndex}/>
    </div>
  )
}
