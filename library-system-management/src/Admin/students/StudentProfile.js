import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/esm/Form';

function StudentProfile() {
  return (
      <div className="d-flex">
          <AdminNavbar />
          <div className="p-5 col-md-10">
              <p>hello</p>
              <Card>
                  <Card.Body className="d-flex">
                      <div className="col-8">
                          <p>Nitha Samuel</p>
                          <p>nithasamuel@gmail.com</p>
                      </div>
                      <div className="col-3 px-4">
                          <p>Total Books issued</p>
                          <p>Returned Books</p>
                          <p>Total Fine</p>
                      </div>
                      <div>
                          <p>4</p>
                          <p>5</p>
                          <p>Rs.70</p>
                      </div>
                  </Card.Body>
              </Card>
              <div className=' p-5 col-6'>
                <Form.Label className='pb-3'>Issued Books (5)</Form.Label>
                <Form.Control type="text" placeholder="Search by student name or email"/>
              </div>
              <div className="col-md-12 student-data-container px-5 ">
                  <div className="d-flex py-4 ">
                      <p className="col-2 m-0">Book Title</p>
                      <p className="col-2 m-0">Author</p>
                      <p className="col-2 m-0">Issue Date</p>
                      <p className="col-2 m-0">Due Date</p>
                      <p className="col-2 m-0">Return Date</p>
                      <p className="col-2 m-0">Fine<br/>(Rs. 10 per day)</p>
                  </div>
                  <div className="d-flex py-4 ">
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