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
    setIssuedBookDatas,
    issuedBookDatas
}) {

    //const [issuedBook, setIssuedBook] = useState({id:"",issueBookName:"",issueStudentName:"",issueDate:"",issueDueDate:""})
    const [issueBookName, setIssueBookName] = useState("")
    const [issueStudentName, setissueStudentName] = useState("")
    const [issueDate, setIssueDate] = useState("")
    const [issueDueDate, setIssueDueDate] = useState("")

    const handleCloseIssuedBookModal = () => setShowIssuedBookModal(false);

    const issuedBook = {id:shortid.generate(),issueBookName:issueBookName,issueStudentName:issueStudentName,issueDate:issueDate,issueDueDate:issueDueDate}

    const handleIssuedBookSubmit = () => {
           
        setIssuedBookDatas([...issuedBookDatas, issuedBook])
            handleCloseIssuedBookModal()
            console.log(issuedBookDatas)
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
                        onChange={e=>setIssueBookName(e.target.value)}
                        value={issueBookName}>
                            <option value="1">select book name</option>
                            {
                                bookDatas?.map((item)=>{
                                    return(
                                        <option value={item.id}>{item.bookName}</option>
                                    )
                                })
                            } 
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Student</Form.Label>
                        <Form.Select aria-label="Default select example"
                        onChange={e=>setissueStudentName(e.target.value)}
                        value={issueStudentName}>
                            <option value="1">select student</option>
                            {
                                studentDatas?.map((student)=>{
                                    return(
                                        <option value={student.id}>{student.name}</option>
                                    )            
                                })
                            }
                            
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Issue Date</Form.Label>
                        <Form.Control type="date" placeholder="name@example.com"
                        onChange={e=>setIssueDate(e.target.value)}
                        value={issueDate}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" placeholder=""
                        onChange={e=>setIssueDueDate(e.target.value)}
                        value={issueDueDate}
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
