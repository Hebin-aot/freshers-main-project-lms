import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import shortid from "shortid"

function IssuedBookModal({
    showIssuedBookModal,
    setShowIssuedBookModal,
    setBookDatas,
    bookDatas,
    setStudentDatas,
    studentDatas,
    issuedBooks,
    setIssuedBooks}) {

    const [issuedBook, setIssuedBook] = useState({id:"",issueBookName:"",issueStudentName:"",issueDate:"",issueDueDate:""})


    const handleCloseIssuedBookModal = () => setShowIssuedBookModal(false);

    const handleIssuedBookSubmit = () => {
           
            setIssuedBooks([...issuedBooks,issuedBook])
            console.log(issuedBooks)
            handleCloseIssuedBookModal()
    }
    
    return (
        <Modal show={showIssuedBookModal} onHide={handleCloseIssuedBookModal}>
            <Modal.Header closeButton>
                <Modal.Title>Issue Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Book</Form.Label>
                        <Form.Select aria-label="Default select example" 
                        onChange={e=>issuedBook({...setIssuedBook,issueBookName:e.target.value,id:shortid.generate()})}
                        value={issuedBook.issueBookName}>
                            {
                                bookDatas.map((item)=>{
                                    return(
                                        <option value={item.bookName} >{item.bookName}</option>
                                    )
                                })
                            } 
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Student</Form.Label>
                        <Form.Select aria-label="Default select example">
                            {
                                studentDatas.map((student)=>{
                                    return(
                                        <option value={student.name}>{student.name}</option>
                                    )            
                                })
                            }
                            
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Issue Date</Form.Label>
                        <Form.Control type="date" placeholder="name@example.com" autoFocus 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" placeholder="" autoFocus 
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleCloseIssuedBookModal}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleIssuedBookSubmit}>
                    Issue Book
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default IssuedBookModal;
