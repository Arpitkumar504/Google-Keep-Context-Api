import React from 'react'
import { BiNote } from 'react-icons/bi';

const Headerkeep = ({ name }) => {
  return (
    <div className='header'>
      <h1><BiNote /> {name}</h1>
    </div>
  )
}

export default Headerkeep