import React from 'react'
import DAte_month from './DAte_month'
import Subject_NAme from './Subject_NAme'
import DropDown from './DropDown'

const Classes = ({Colors ,MOnth,Date,Subject}) => {
  return (
    <div className='p-3 flex justify-between items-center'>
    <div className='flex  '>
    <DAte_month  bGcOloR={Colors} MOnth={MOnth}  Date={Date}/> 
    <Subject_NAme Subject={Subject}/>
    </div>
    <DropDown/>
    </div>
    
    

    
    
    
  )
}

export default Classes