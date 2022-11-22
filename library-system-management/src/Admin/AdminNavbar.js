import React from 'react'
import './AdminNavbar.css';
import { Link } from 'react-router-dom';


function AdminNavbar() {


  return (
        <div className='navigation-bar col-md-2 sticky-top'>
            <div className='logoContainer  d-flex align-items-center gap-2 p-5'>
                <img src="./images/LMSwhiteLogo.png" alt="" />
                <p className='lmsWhiteText m-0'>LMS</p>
            </div>
            <div className='admin-navigation-tab-container d-flex flex-column align-items-center gap-4'>

                <Link to="/issued-books" className='student-nav-links col-md-10'>
                  <button className='col-md-10 d-flex gap-3'> <img src="./images/issuedBook.png" alt="" /> Issued Books</button>
                </Link>
                
                <Link to="/all-books" className='student-nav-links col-md-10'>
                  <button className='col-md-10 d-flex gap-3'> <img src="./images/allBooks.png" alt="" /> All Books</button>
                </Link>
                
                <Link to="/students" className='student-nav-links col-md-10'>
                  <button className='d-flex gap-3 col-md-10'> <img src="./images/studentsLogo.png" alt="" /> Students</button>
                </Link>     

            </div>
        </div>
  )
}

export default AdminNavbar;