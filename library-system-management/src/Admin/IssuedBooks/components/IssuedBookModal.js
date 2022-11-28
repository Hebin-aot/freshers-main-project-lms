import React from "react";
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

    const issuedBook = {
        id:shortid.generate(),
        issueBookName:issueBookName,
        issueStudentName:issueStudentName,
        issueDate:issueDate,
        issueDueDate:issueDueDate,
        issueReturnDate:'-',
        fine:0,
        returnState:false
    }

    const handleIssuedBookSubmit = () => {
           //fineFunction()
        setIssuedBookDatas([...issuedBookDatas, issuedBook])
            handleCloseIssuedBookModal()
            console.log(issuedBook)
            
        // var dateDiff = new Date().getTime() - new Date(issueDueDate).getTime();
        // var numOfDays = Math.floor(dateDiff/(1000*60*60*24));
        
        // var fine = (numOfDays*10)
        // console.log(fine);
        // setIssueFine(fine)
        
    }

    // const fineFunction = () => {
    //     var dateDiff = new Date().getTime() - new Date(issueDueDate).getTime();
    //     var numOfDays = Math.floor(dateDiff/(1000*60*60*24));

    //     var fine = (numOfDays*10)
    //     setIssueFine(fine)
    // }
    


    return (
        <Modal show={showIssuedBookModal} onHide={handleCloseIssuedBookModal}>
            <Modal.Header closeButton>
                <Modal.Title className="student-title border-0">Issue Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="modal-sub-heads">Book</Form.Label>
                        <Form.Select aria-label="Default select example" 
                        onChange={e=>setIssueBookName(e.target.value)}
                        value={issueBookName}>
                            <option value="1">select book name</option>
                            {
                                bookDatas?.map((item)=>{
                                    return(
                                        <option key={shortid.generate()} value={item.id}>{item.bookName}</option>
                                    )
                                })
                            } 
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="modal-sub-heads">Student</Form.Label>
                        <Form.Select aria-label="Default select example"
                        onChange={e=>setissueStudentName(e.target.value)}
                        value={issueStudentName}>
                            <option value="1">select student</option>
                            {
                                studentDatas?.map((student)=>{
                                    return(
                                        <option key={shortid.generate()} value={student.id}>{student.name}</option>
                                    )            
                                })
                            }
                            
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="modal-sub-heads">Issue Date</Form.Label>
                        <Form.Control type="date" placeholder="name@example.com"
                        onChange={e=>setIssueDate(e.target.value)}
                        value={issueDate}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="modal-sub-heads">Due Date</Form.Label>
                        <Form.Control type="date" placeholder=""
                        onChange={e=>setIssueDueDate(e.target.value)}
                        value={issueDueDate}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="issue-book-modal-cancel px-3 py-2" onClick={handleCloseIssuedBookModal}>
                    Cancel
                </button>
                <button className="issue-book-modal-button px-3 py-2" onClick={handleIssuedBookSubmit}>
                    Issue Book
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default IssuedBookModal;
