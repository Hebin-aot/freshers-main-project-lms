import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/esm/Form';
import { useContext } from 'react';
import { studentProfileContext } from '../../App';
import { useState } from 'react';

function StudentProfile() {

    const [studentProfileDetails, setStudentProfileDetails] = useContext(studentProfileContext)

  return (
      <div className="d-flex">
          <AdminNavbar />
          <div className="p-5 col-md-10">
              <div className='d-flex'>
                <p className='student-card-details'>Students/</p>
                <p className='fine-books'>{studentProfileDetails.name}</p>
              </div>  
              <Card>
                  <Card.Body className="d-flex">
                      <div className="col-8 name-mail-container">
                          <p className='student-profile-name'>{studentProfileDetails.name}</p>
                          <p className='student-profile-mail'>{studentProfileDetails.email}</p>
                      </div>
                      <div className="col-3 px-4 d-flex flex-column gap-4 student-card-details">
                          <p className="m-0">Total Books issued</p>
                          <p className="m-0">Returned Books</p>
                          <p className="m-0">Total Fine</p>
                      </div>
                      <div className='d-flex flex-column gap-4 fine-books'>
                          <p className="m-0">4</p>
                          <p className="m-0">5</p>
                          <p className="m-0">Rs.70</p>
                      </div>
                  </Card.Body>
              </Card>
              <div className=' p-5 col-6'>
                <Form.Label className='pb-3 issuedbooks'>Issued Books (5)</Form.Label>
                <Form.Control type="text" placeholder="Search by student name or email"/>
              </div>
              <div className="col-md-12 student-data-container px-5 ">
                  <div className="d-flex py-4 student-profile-table-titles">
                      <p className="col-2 m-0">Book Title</p>
                      <p className="col-2 m-0">Author</p>
                      <p className="col-2 m-0">Issue Date</p>
                      <p className="col-2 m-0">Due Date</p>
                      <p className="col-2 m-0">Return Date</p>
                      <p className="col-2 m-0">Fine<br/>(Rs. 10 per day)</p>
                  </div>
                  <div className="d-flex py-4 student-profile-table-contents">
                      <p className="col-2 m-0">It Start With Us</p>
                      <p className="col-2 m-0">Collen Hoover</p>
                      <p className="col-2 m-0">10-11-2022 </p>
                      <p className="col-2 m-0">18-11-2022</p>
                      <p className="col-2 m-0">18-11-2022</p>
                      <p className="col-2 m-0 ps-5">10</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default StudentProfile