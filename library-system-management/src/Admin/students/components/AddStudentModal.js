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
        setStudentEmail('')
        setStudentPassword('')
        setStudentName('')
        setConfirmPassword('')
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
          <Modal.Title className="student-title border-0">{editModal? "Edit Student":"Add Student"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-sub-heads">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg: John Doe"
                onChange={e=>setStudentName(e.target.value)}
                value={studentName}
              />
              {formValidation && !studentName?<Form.Label className='text-danger ps-2'>Please enter the name !</Form.Label>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-sub-heads">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={e=>setStudentEmail(e.target.value)}
                value={studentEmail}
              />
              {formValidation && !studentEmail?<Form.Label className='text-danger ps-2'>Please enter the email !</Form.Label>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-sub-heads">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                onChange={e=>setStudentPassword(e.target.value)}
                value={studentPassword}
              />
              {formValidation && !studentPassword?<Form.Label className='text-danger ps-2'>Please enter the password !</Form.Label>:""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="modal-sub-heads">ConfirmPassword</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                onChange={e=>setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              {formValidation && studentPassword !== confirmPassword? <Form.Label className='text-danger ps-2'>Incorrect</Form.Label>:""}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="issue-book-modal-cancel px-3 py-2" onClick={handleClose}>
            Cancel
          </button>
          <button className="issue-book-modal-button px-4 py-2" onClick={editModal? handleEditSubmit:handleSubmit }>
          {editModal? "Save" :"Submit" }
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddStudentModal;