import React from 'react'

const Profile_header = () => {
    return (
        <div className='flex w-full items-center justify-between p-3'>

            <div className='flex items-center'>  
             <img
                className=" h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
            <div className='ml-3 '>
            <p>Avishek Shaarma</p>
            <p  className='text-[12px] text-gray-500'>Male 21 yr</p>
            </div>
            
            </div>
     <i className=" text-[#0b74fa] fa-solid fa-bars"></i>
        </div>
    )
}

export default Profile_header