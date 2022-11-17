import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {  useState } from 'react';
import shortid from "shortid"

function AddStudentModal({show,setShow,setStudentDatas,studentDatas,editModal,setEditModal,selectedStudent,setSelectedStudent}) {

    
    const [studentData, setStudentData] = useState({id:"", name:"",email:"",password:"",role:"candidate"})

    const [editedStudentData, setEditedStudentData] = useState({name:"",email:"",password:""})



    const handleSubmit = () => {
        setStudentDatas([...studentDatas,studentData])
        handleClose()
        setStudentData({id:"", name:"",email:"",password:"",role:"candidate"})
    }

    const handleEditSubmit = () => {
        
    }


    const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editModal? "Edit Student":"Add Student"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: John Doe"
                onChange={editModal? e=>setEditedStudentData({...editedStudentData,name:e.target.value}):e=>setStudentData({...studentData,name:e.target.value,id:shortid.generate()})}
                value={editModal? selectedStudent.name : studentData.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                onChange={e=>setStudentData({...studentData,email:e.target.value})}
                value={editModal? selectedStudent.email : studentData.email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                onChange={e=>setStudentData({...studentData,password:e.target.value})}
                value={editModal? selectedStudent.password : studentData.password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ConfirmPassword</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={editModal? handleEditSubmit:handleSubmit }>
          {editModal? "Save" :"Submit" }
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddStudentModal;