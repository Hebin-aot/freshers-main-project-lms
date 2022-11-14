import React from 'react'
import AdminNavbar from '../AdminNavbar';
import SearchBook from './components/SearchBook';
import AddNewBook from './components/AddNewBook';
import BookDetails from './components/BookDetails';
import './AllBooks.css'

function AllBooks() {
  return (
    <div className='d-flex'>
        <AdminNavbar/>
        <div className='book-container col-md-10 p-5'>
            <form action="">
                <div className='book-title p-3'>
                    <label htmlFor="Books">All Books</label>
                </div>
                <div className="book-searchadd-container d-flex align-items-center justify-content-between py-5">
                    <SearchBook/>
                    <AddNewBook/>
                </div>
            </form>

            <div className='book-data-container px-2'>
                <div className='d-flex py-4 px-4 name-email-action-container gap-2'>
                    <p className='book-data-titles col-2 m-0 '>Book Title</p>
                    <p className='book-data-titles col-2 m-0'>Author</p>
                    <p className='book-data-titles col-2 m-0'>Language</p>
                    <p className='book-data-titles col-2 m-0 '>Total Copies</p>
                    <p className='book-data-titles col-2 m-0'>Remaining</p>
                    <p className='book-data-titles col-2 m-0'>Actions</p>
                </div>
                <BookDetails/>
            </div>
        </div>
    </div>
  )
}

export default AllBooks;