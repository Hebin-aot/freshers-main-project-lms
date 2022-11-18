import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {  useEffect, useState } from 'react';
import shortid from "shortid"

function AddStudentModal({show,setShow,setStudentDatas,studentDatas,editModal,setEditModal,selectedStudent,setSelectedStudent}) {

    
   // const [studentData, setStudentData] = useState()

    //const [editedStudentData, setEditedStudentData] = useState({name:"",email:"",password:""})

    const [studentEmail, setStudentEmail] = useState(null)

    const [studentPassword, setStudentPassword] = useState(null)

    const [studentName, setStudentName] = useState(null)

    const handleSubmit = () => {
      if(studentName && studentEmail && studentPassword !== ''){
      const studentData={id:shortid.generate(), name:studentName,email:studentEmail,password:studentPassword,role:"candidate"}

        setStudentDatas([...studentDatas,studentData])
        handleClose()
        console.log(studentData)
      }
    }

    useEffect(()=>{
      setStudentName( selectedStudent?.name || "")
      setStudentEmail( selectedStudent?.email || "")
      setStudentPassword( selectedStudent?.password || "")
    },[selectedStudent])



    const handleEditSubmit = () => {
        if (studentName && studentEmail && studentPassword !== "") {
            setStudentDatas((studentDatas) =>
                studentDatas.map((obj) => {
                    if (obj.id === selectedStudent.id) {
                        return { ...obj, name: studentName, email: studentEmail, password: studentPassword };
                    }
                    return obj;
                })
            );
        } else {
            console.log("please fill out form");
        }
        handleClose()
    };
        



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
                onChange={e=>setStudentName(e.target.value)}
                value={studentName || ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                onChange={e=>setStudentEmail(e.target.value)}
                value={studentEmail || ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                onChange={e=>setStudentPassword(e.target.value)}
                value={studentPassword || ""}
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