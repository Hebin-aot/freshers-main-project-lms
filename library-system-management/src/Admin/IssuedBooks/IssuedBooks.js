import React from 'react'
import AdminNavbar from '../AdminNavbar';
import SearchIssuedBook from './components/SearchIssuedBook';
import IssueBook from './components/IssueBook';
import IssuedBookDetails from './components/IssuedBookDetails';
import './IssuedBook.css'

function IssuedBooks() {
  return (
    <div className='d-flex'>
        <AdminNavbar/>
        <div className='issuedbook-container col-md-10 p-5'>
            <form action="">
                <div className='issuedbook-title p-3'>
                    <label htmlFor="IssuedBooks">Issued Books</label>
                </div>
                <div className="book-searchadd-container d-flex align-items-center justify-content-between py-5">
                    <SearchIssuedBook/>
                    <IssueBook/>
                </div>
            </form>

            <div className='book-data-container px-5'>
                <div className='d-flex py-4 px-4 name-email-action-container gap-2'>
                    <p className='issuedbook-data-titles col-2 m-0 '>Book Title</p>
                    <p className='issuedbook-data-titles col-2 m-0'>Student</p>
                    <p className='issuedbook-data-titles col-2 m-0'>Issue Date</p>
                    <p className='issuedbook-data-titles col-2 m-0 '>Due Date</p>
                    <p className='issuedbook-data-titles col-2 m-0'>Fine<br></br>(Rs.10 per day)</p>
                    <p className='issuedbook-data-titles col-2 m-0'>Actions</p>
                </div>
                <IssuedBookDetails/>
            </div>
        </div>
    </div>
  )
}

export default IssuedBooks;