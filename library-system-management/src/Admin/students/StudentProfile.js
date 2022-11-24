import React from 'react'
import AdminNavbar from '../AdminNavbar'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/esm/Form';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { issuedBookContext } from '../../App';
import { bookContext } from "../../App";
import { studentContext } from "../../App";

function StudentProfile() {

    let {id} = useParams()


    const [issuedBookDatas, setIssuedBookDatas] = useContext(issuedBookContext);
    const [studentDatas, setStudentDatas] = useContext(studentContext);
    const [bookDatas, setBookDatas] = useContext(bookContext);

  return (
      <div className="d-flex">
          <AdminNavbar />
          <div className="p-5 col-md-10">
              <div className="d-flex">
                  <p className="student-card-details">Students/</p>

                  <p className="fine-books">
                      {studentDatas.map((student) => {
                          if (id === student.id) {
                              return student.name;
                          }
                      })}
                  </p>
              </div>
              <Card>
                  <Card.Body className="d-flex">
                      <div className="col-8 name-mail-container">
                          <p className="student-profile-name">
                              {studentDatas.map((student) => {
                                  if (id === student.id) {
                                      return student.name;
                                  }
                              })}
                          </p>
                          <p className="student-profile-mail">
                              {studentDatas.map((student) => {
                                  if (id === student.id) {
                                      return student.email;
                                  }
                              })}
                          </p>
                      </div>
                      <div className="col-3 px-4 d-flex flex-column gap-4 student-card-details">
                          <p className="m-0">Total Books issued</p>
                          <p className="m-0">Returned Books</p>
                          <p className="m-0">Total Fine</p>
                      </div>
                      <div className="d-flex flex-column gap-4 fine-books">
                          <p className="m-0">4</p>
                          <p className="m-0">5</p>
                          <p className="m-0">Rs.70</p>
                      </div>
                  </Card.Body>
              </Card>
              <div className=" p-5 col-6">
                  <Form.Label className="pb-3 issuedbooks">Issued Books (5)</Form.Label>
                  <Form.Control type="text" placeholder="Search by student name or email" />
              </div>
              <div className="col-md-12 student-data-container px-5 ">
                  <div className="d-flex py-4 student-profile-table-titles">
                      <p className="col-2 m-0">Book Title</p>
                      <p className="col-2 m-0">Author</p>
                      <p className="col-2 m-0">Issue Date</p>
                      <p className="col-2 m-0">Due Date</p>
                      <p className="col-2 m-0">Return Date</p>
                      <p className="col-2 m-0">
                          Fine
                          <br />
                          (Rs. 10 per day)
                      </p>
                  </div>

                  {issuedBookDatas.map((obj) => {
                    console.log(obj)
                    if(obj.issueStudentName === id)
                      return (
                          <div key={obj.id} className="d-flex py-4 student-profile-table-contents">
                              <p className="col-2 m-0">{
                                bookDatas.map((book)=>{
                                    if(book.id === obj.issueBookName){
                                        return(book.bookName)
                                    }
                                })
                              }</p>
                              <p className="col-2 m-0">{
                                bookDatas.map((book)=>{
                                    if(book.id === obj.issueBookName){
                                        return(book.author)
                                    }
                                })
                              }</p>
                              <p className="col-2 m-0">{obj.issueDate}</p>
                              <p className="col-2 m-0">{obj.issueDueDate}</p>
                              <p className="col-2 m-0">{obj.issueReturnDate}</p>
                              <p className="col-2 m-0 ps-5">10</p>
                          </div>
                      );
                  })}

              </div>
          </div>
      </div>
  );
}

export default StudentProfile