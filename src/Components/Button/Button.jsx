import React from 'react'

function Button({name , id }) {
  return (
      <div className='bg-blue-200 w-full py-2 rounded-lg ps-4 mt-3'>
        <a href={`#${id}`}>{name}</a>
      </div>
  )
}

export default Button