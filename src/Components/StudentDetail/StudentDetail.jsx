import React from 'react';
import StudentName from '../StudentName/StudentName';

const StudentDetail = () => {
  return (
    <div>
      <div className='flex items-center ps-2'>
        <span className='fw-medium pe-2'>Submitted</span>
        <span className='bg-indigo-400 rounded p-1 text-center text-white text-[8px]'>20</span>
      </div>
      <br />
     <StudentName/>
     <br/>
     <StudentName/>
    
     <br/>
     <StudentName/>
     <br/>
     <StudentName/>
    </div>
  );
};

export default StudentDetail;
