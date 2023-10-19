import React from 'react'

const Container = ( {children}) => {
  return (
    <div className=' py-[60px]  overflow-auto ps-2 pe-2 '>
    {children}
    </div>
  )
}

export default Container