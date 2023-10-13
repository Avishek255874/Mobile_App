import React from 'react'

const Container = ( {children}) => {
  return (
    <div className=' py-[60px]  overflow-auto  '>
    {children}
    </div>
  )
}

export default Container