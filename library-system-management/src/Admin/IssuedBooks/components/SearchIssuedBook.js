import React from 'react'
import Form from 'react-bootstrap/esm/Form';

function SearchIssuedBook() {
  return (
    <div className='col-md-6'>
        <Form.Control type="text" placeholder="Search by student name or email" />
    </div>
  )
}

export default SearchIssuedBook;