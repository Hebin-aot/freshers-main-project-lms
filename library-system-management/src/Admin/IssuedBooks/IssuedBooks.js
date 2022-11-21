import React from "react";
import AdminNavbar from "../AdminNavbar";
import ReactTooltip from "react-tooltip";
import "./IssuedBook.css";
import IssuedBookModal from "./components/IssuedBookModal";
import { useState } from "react";
import { studentContext } from "../../App";
import { useContext } from "react";
import { bookContext } from "../../App";
import Form from "react-bootstrap/esm/Form";
import { issuedBooksContext } from "../../App"

function IssuedBooks() {
    const [studentDatas, setStudentDatas] = useContext(studentContext);
    const [bookDatas, setBookDatas] = useContext(bookContext);
    const [issuedBooks, setIssuedBooks] = useState(issuedBooksContext);

    const [showIssuedBookModal, setShowIssuedBookModal] = useState(false);
    const handleShowIssuedBookModal = () => setShowIssuedBookModal(true);

    

    return (
        <div className="d-flex">
            <AdminNavbar />
            <div className="issuedbook-container col-md-10 p-5">
                <form action="">
                    <div className="issuedbook-title p-3">
                        <label htmlFor="IssuedBooks">Issued Books</label>
                    </div>
                    <div className="book-searchadd-container d-flex align-items-center justify-content-between py-5">
                        <div className="col-md-6">
                            <Form.Control type="text" placeholder="Search by student name or email" />
                        </div>

                        <div className="col-md-2 ">
                            <button
                                onClick={handleShowIssuedBookModal}
                                type="button"
                                className="issue-book-button px-3 py-2"
                            >
                                Issue Book
                            </button>
                        </div>
                    </div>
                </form>

                <IssuedBookModal
                        showIssuedBookModal={showIssuedBookModal}
                        setShowIssuedBookModal={setShowIssuedBookModal}
                        studentDatas={studentDatas}
                        setStudentDatas={setStudentDatas}
                        bookDatas={bookDatas}
                        setBookDatas={setBookDatas}
                        issuedBooks={issuedBooks}
                        setIssuedBooks={setIssuedBooks}
                    />

                <div className="book-data-container px-5">
                    <div className="d-flex py-4 px-4 name-email-action-container gap-2">
                        <p className="issuedbook-data-titles col-2 m-0 ">Book Title</p>
                        <p className="issuedbook-data-titles col-2 m-0">Student</p>
                        <p className="issuedbook-data-titles col-2 m-0">Issue Date</p>
                        <p className="issuedbook-data-titles col-2 m-0 ">Due Date</p>
                        <p className="issuedbook-data-titles col-2 m-0">
                            Fine<br></br>(Rs.10 per day)
                        </p>
                        <p className="issuedbook-data-titles col-2 m-0">Actions</p>
                    </div>

                    {/* {
                        issuedBooks.map(book=>{
                            return( */}
                                <div className="px-4 py-4 d-flex py-4 px-4 gap-2 issued-book-datas">
                                    <p className="col-2 m-0"></p>
                                    <p className="col-2 m-0"></p>
                                    <p className="col-2 m-0"></p>
                                    <p className="col-2 m-0"></p>
                                    <p className="col-2 m-0 ps-4">10</p>
                                    <button data-tip data-for="mark-return" className="issuebook-return-btn text-center" type="button">
                                        <img src="./images/returnIcon.png" alt="" />
                                    </button>
                                    <ReactTooltip id="mark-return" place="top" effect="solid">
                                        Mark as returned
                                    </ReactTooltip>
                                </div>
                            {/* )
                        })
                    } */}
                    
                </div>
            </div>
        </div>
    );
}

export default IssuedBooks;
