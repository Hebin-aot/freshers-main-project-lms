import React, { useContext } from 'react'
import AdminNavbar from '../AdminNavbar';
import Form from 'react-bootstrap/esm/Form';
import './AllBooks.css'
import { useState } from 'react';
import AddBookModal from './components/AddBookModal';
import { bookContext } from '../../App';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';

function AllBooks() {

    //states for book modals
    const [addBookModal, setAddBookModal] = useState(false);
    const handleAddBookModalShow = () => setAddBookModal(true);
    const [deleteBookModal, setDeleteBookModal] = useState(false);
    const handleDeleteBookModalClose = () => setDeleteBookModal(false);
    const handleDeleteBookModalShow = () => setDeleteBookModal(true);

    const [bookDatas, setBookDatas] = useContext(bookContext)

    const [searchBook, setSearchBook] = useState("")

    const [bookDltId, setBookDltId] = useState("")


    //book delete funtion
    const handleBookDelete = (dltid)=>{
        setBookDatas(bookDatas.filter((book)=> dltid !== book.id ))
        handleDeleteBookModalClose()
    }

    const bookDeleteId = (id) =>{
        setBookDltId(id)
    }

  return (
      <div className="d-flex">
          <AdminNavbar />
          <div className="book-container col-md-10 p-5">
              <form action="">
                  <div className="book-title p-3">
                      <label htmlFor="Books">All Books</label>
                  </div>
                  <div className="book-searchadd-container d-flex align-items-center justify-content-between py-5">
                      <div className="col-md-6">
                          <Form.Control
                              onChange={(e) => {
                                  setSearchBook(e.target.value);
                              }}
                              type="text"
                              placeholder="Search by student name or email"
                          />
                      </div>
                      <div className="col-md-2 ">
                          <button
                              type="button"
                              className="col-md-12 add-new-book-button py-2"
                              onClick={handleAddBookModalShow}
                          >
                              Add New Book
                          </button>
                      </div>
                  </div>
              </form>

              <div className="book-data-container px-5 col-12">
                  <div className="bookTitles d-flex py-4 px-4 gap-2 ">
                      <p className="book-data-titles col-2 m-0 ">Book Title</p>
                      <p className="book-data-titles col-2 m-0">Author</p>
                      <p className="book-data-titles col-2 m-0">Language</p>
                      <p className="book-data-titles col-2 m-0 ">Total Copies</p>
                      <p className="book-data-titles col-2 m-0">Remaining</p>
                      <p className="book-data-titles col-2 m-0">Actions</p>
                  </div>

                
                  {bookDatas?.filter((book) => {
                          if (searchBook === "") {
                              return book;
                          } else if (book.bookName.toLocaleLowerCase().includes(searchBook.toLocaleLowerCase())) {
                              return book;
                          }
                          return 0;
                      })
                      .map((book) => {
                          return (
                              <div key={book.id} className="px-4 py-4 d-flex py-4 px-4 gap-2 book-datas">
                                  <p className="col-2 m-0">{book.bookName}</p>
                                  <p className="col-2 m-0">{book.author}</p>
                                  <p className="col-2 m-0">{book.language}</p>
                                  <p className="col-2 m-0 ps-4">{book.totalCopies}</p>
                                  <p className="col-2 m-0 ps-4">{book.remaining}</p>
                                  <div className="col-2 m-0 d-flex gap-2">
                                      <button className="all-books-edit-delete-btn">
                                          <img src="./images/editIcon.png" alt="" />
                                      </button>
                                      <button className="all-books-edit-delete-btn" onClick={()=>{handleDeleteBookModalShow();bookDeleteId(book.id)}}>
                                          <img src="./images/deleteIcon.png" alt="" />
                                      </button>
                                  </div>
                              </div>
                          );
                      })}
              </div>
          </div>

          <AddBookModal
              addBookModal={addBookModal}
              setAddBookModal={setAddBookModal}
              bookDatas={bookDatas}
              setBookDatas={setBookDatas}
          />

          {/* delete pop up for book */}
          <Modal show={deleteBookModal} onHide={handleDeleteBookModalClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Alert</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure to delete the book</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleDeleteBookModalClose}>
                      Cancel
                  </Button>
                  <Button variant="danger" onClick={() => handleBookDelete(bookDltId)}>
                      Delete
                  </Button>
              </Modal.Footer>
          </Modal>

      </div>
  );
}

export default AllBooks;