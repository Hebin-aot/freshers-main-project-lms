import React from 'react'
import StudentNavbar from '../StudentNavbar'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/esm/Form';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { issuedBookContext } from '../../App';
import { bookContext } from "../../App";
import { studentContext } from "../../App";


function StudentAllBooks({studentID}) {

    let id = studentID

    const [issuedBookDatas, setIssuedBookDatas] = useContext(issuedBookContext);
    const [studentDatas, setStudentDatas] = useContext(studentContext);
    const [bookDatas, setBookDatas] = useContext(bookContext);

    const issueCount = issuedBookDatas.filter((obj)=>{
        if(obj.issueStudentName === id)
        return(obj)
    })

    const returnCount = issuedBookDatas.filter((obj)=>{
        if(obj.issueStudentName === id && obj.returnState === true)
        return(obj)
    })

    const totalFine = issueCount.reduce((a,b)=> a= a+b.fine,0)

  return (
    <div className='d-flex'>
        <StudentNavbar/>
        <div className="p-5 col-md-10">
        <form action="">
                  <div className="book-title p-3">
                      <label htmlFor="Books">All Books</label>
                  </div>
                  <div className="book-searchadd-container d-flex align-items-center justify-content-between py-5">
                      <div className="col-md-6">
                          <Form.Control
                              type="text"
                              placeholder="Search by student name or email"
                          />
                      </div>
                      <div className="col-md-2 ">
                          <button
                              type="button"
                              className="col-md-12 sort-book-button py-2"
                          >
                              Sort 
                          </button>
                      </div>
                  </div>
              </form>
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
                              <p className="col-2 m-0 ps-5">{obj.fine}</p>
                          </div>
                      );
                  })}

              </div>
          </div>
    </div>
  )
}

export default StudentAllBooks