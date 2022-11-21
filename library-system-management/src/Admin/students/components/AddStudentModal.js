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

    const [confirmPassword, setConfirmPassword] = useState(null)

    const [formValidation, setFormValidation] = useState(false)

    const handleSubmit = () => {
      const studentData={id:shortid.generate(), name:studentName,email:studentEmail,password:studentPassword,confirmPassword:confirmPassword, role:"candidate"}

      if(studentName === '' || studentEmail === '' || confirmPassword !== studentPassword || confirmPassword === '' || studentPassword === '' ){
        setFormValidation(true)
      }
      else{
        setStudentDatas([...studentDatas,studentData])
        setFormValidation(false)
        handleClose()
        console.log(studentData)
      }
    }

    useEffect(()=>{
      setStudentName( selectedStudent?.name || "")
      setStudentEmail( selectedStudent?.email || "")
      setStudentPassword( selectedStudent?.password || "")
      setConfirmPassword(selectedStudent?.confirmPassword || "")
    },[selectedStudent])


    const handleEditSubmit = () => {
      if(studentName === '' || studentEmail === '' || confirmPassword !== studentPassword || confirmPassword === '' || studentPassword === '' ){
        setFormValidation(true)
      }  
      else {
          setStudentDatas((studentDatas) =>
                studentDatas.map((obj) => {
                    if (obj.id === selectedStudent.id) {
                        return { ...obj, name: studentName, email: studentEmail, password: studentPassword };
                    }
                    return obj;
                })
            );
            setFormValidation(false)
            handleClose()
        }
        
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
                value={studentName}
              />
              {formValidation && !studentName?<Form.Label className='text-danger'>enter name</Form.Label>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={e=>setStudentEmail(e.target.value)}
                value={studentEmail}
              />
              {formValidation && !studentEmail?<Form.Label className='text-danger'>enter email</Form.Label>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                onChange={e=>setStudentPassword(e.target.value)}
                value={studentPassword}
              />
              {formValidation && !studentPassword?<Form.Label className='text-danger'>enter password</Form.Label>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ConfirmPassword</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                onChange={e=>setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              {formValidation && studentPassword !== confirmPassword? <Form.Label className='text-danger'>incorrect</Form.Label>:""}
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