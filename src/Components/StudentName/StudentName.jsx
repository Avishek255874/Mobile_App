import React from 'react'

const StudentName = () => {
  return (
    <div className='flex justify-between items-center ps-3 overflow-auto'>
        <div className='bg-gray-100 flex items-center p-1 rounded-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOeo0jhCc60ikYbMRbSMHerx3jWbVqJWLllehfefs1dv1r18mfFrl1gqIidqSUw1pHxA&usqp=CAU" className='h-6 w-6 rounded-circle' />
          <span className='text-[8px] px-2'>Amit Saha</span>
        </div>
        <div className='bg-gray-100 flex items-center p-1 rounded-full'>
          <img src="https://scontent.fccu27-1.fna.fbcdn.net/v/t39.30808-6/410861956_2064975223874896_5980317467458747086_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=b2OPs6uIUVUAX86slLm&_nc_ht=scontent.fccu27-1.fna&oh=00_AfBUnuEnIQJrh9VLG0QPCrIdmU0DP5b3-EpOv0SC6437AA&oe=65946CB1" className='h-6 w-6 rounded-circle' />
          <span className=' text-[8px] px-2'>Avishek Sharma</span>
        </div>
        <div className='bg-gray-100 flex items-center p-1 rounded-full'>
          <img src="https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/413010506_2070145636691188_8997094586498144685_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=F5MprZz1zIUAX-IJxY6&_nc_ht=scontent.fccu27-2.fna&oh=00_AfACmFAnfzt18cxKrRbFp58dvh-nMPjCXpcRtHqETK1sNg&oe=65932471" className='h-6 w-6 rounded-circle' />
          <span className='text-[8px]   fw-medium px-2'>Amit Sharma</span>
        </div>
      </div>
  )
}

export default StudentName