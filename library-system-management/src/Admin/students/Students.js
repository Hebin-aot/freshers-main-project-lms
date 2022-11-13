import React from 'react'
import './Students.css'
import StudentSearch from './components/StudentSearch';
import AddStudents from './components/AddStudents';
import StudentDetails from './components/StudentDetails';

function Students() {
  return (

        <div className='student-container col-md-10 p-5'>
            <form action="">
                <div className='student-title p-3'>
                    <label htmlFor="Students">Students</label>
                </div>
                <div className="student-searchadd-container d-flex align-items-center justify-content-between py-5">
                    <StudentSearch/>
                    <AddStudents/>
                </div>
            </form>

            <div className='col-md-12 student-data-container px-5'>
                <div className='d-flex py-4 name-email-action-container'>
                    <p className='col-5 student-name-title m-0 px-4'>Name</p>
                    <p className='col-3 student-email-title m-0'>Email</p>
                    <p className='col-4 student-action-title m-0'>Action</p>
                </div>
                <StudentDetails/>
            </div>
        </div>
  )
}

export default Students;