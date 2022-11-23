import React from "react";
import AdminNavbar from "../AdminNavbar";

import "./IssuedBook.css";
import IssuedBookModal from "./components/IssuedBookModal";
import { useState } from "react";
import { studentContext } from "../../App";
import { useContext } from "react";
import { bookContext } from "../../App";
import Form from "react-bootstrap/esm/Form";
import { issuedBookContext } from "../../App";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import IssuedBookList from "./components/IssuedBookList";

function IssuedBooks() {
    const [issuedBookDatas, setIssuedBookDatas] = useContext(issuedBookContext);
    const [studentDatas, setStudentDatas] = useContext(studentContext);
    const [bookDatas, setBookDatas] = useContext(bookContext);
    const [returnBookId, setReturnBookId] = useState("");

    const handleCloseReturnBookModal = () => setShowReturnBookModal(false);
    const handleShowReturnBookModal = () => setShowReturnBookModal(true);

    const [bookTitle, setBookTitle] = useState("");
    //const [returnBookStatus, setreturnBookStatus] = useState(false)

    const [showReturnBookModal, setShowReturnBookModal] = useState(false);

    const [showIssuedBookModal, setShowIssuedBookModal] = useState(false);
    const handleShowIssuedBookModal = () => setShowIssuedBookModal(true);

    const handleSubmitReturnBookModal = () => {
        issuedBookDatas.map((book) => {
            if (book.id === returnBookId) {
                book.returnState = true;
            }
            return book;
        });

        bookDatas.map((object) => {
            if (object.id === bookTitle) {
                object.remaining = ++object.remaining;
            }
        });

        handleCloseReturnBookModal();
    };

    const returnId = (rId) => {
        setReturnBookId(rId);
    };

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
                    issuedBookDatas={issuedBookDatas}
                    setIssuedBookDatas={setIssuedBookDatas}
                />

                <div className="book-data-container px-5">
                    <div className="d-flex py-4 px-4 name-email-action-container gap-2">
                        <p className="issuedbook-data-titles col-2 m-0 ">Book Title</p>
                        <p className="issuedbook-data-titles col-2 m-0">Student</p>
                        <p className="issuedbook-data-titles col-2 m-0">Issue Date</p>
                        <p className="issuedbook-data-titles col-2 m-0 ">Due Date</p>
                        <p className="issuedbook-data-titles col-2 m-0">
                            Fine<br></br>Rs.10 per day
                        </p>
                        <p className="issuedbook-data-titles col-2 m-0">Actions</p>
                    </div>
                    {issuedBookDatas?.map((book) => {
                        if (book?.returnState === false) {
                            return (
                                <IssuedBookList key={book?.id}
                                    book={book}
                                    returnId={returnId}
                                    setShowReturnBookModal={setShowReturnBookModal}
                                    handleShowReturnBookModal={handleShowReturnBookModal}
                                />
                            );
                        }
                    })}
                </div>
            </div>

            <Modal show={showReturnBookModal} onHide={handleCloseReturnBookModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Return Book ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to want to return the book</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseReturnBookModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitReturnBookModal()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default IssuedBooks;
