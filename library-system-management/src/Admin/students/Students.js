import React from 'react'
import './Students.css'
import StudentSearch from './components/StudentSearch';
import AddStudents from './components/AddStudents';
import StudentDetails from './components/StudentDetails';
import AdminNavbar from '../AdminNavbar';
import AddStudentModal from './components/AddStudentModal';
import { useState } from 'react';
import { studentContext } from '../../App';
import { useContext } from 'react';
import shortid from "shortid"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Students() {

    const [deleteModal, setDeleteModal] = useState(false);

    const handleDeleteModalClose = () => setDeleteModal(false);
    const handleDeleteMoadalShow = () => setDeleteModal(true);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [studentDatas, setStudentDatas] = useContext(studentContext)
    const [dltId, setdltId] = useState("")

    const handleStudentDelete= (dltid) => {

        setStudentDatas(studentDatas.filter((item)=> dltid != item.id ))
        handleDeleteModalClose()
    }

    const deleteId = (id) => {
        setdltId(id)

    }
    

  return (
    <div className='d-flex'>
        <AdminNavbar/>
        <div className='student-container col-md-10 p-5'>
            <form action="">
                <div className='student-title p-3'>
                    <label htmlFor="Students">Students</label>
                </div>
                <div className="student-searchadd-container d-flex align-items-center justify-content-between py-5">
                    <StudentSearch/>
                    <div className='col-md-2 '>
                        <button type='button' onClick={handleShow} className='col-12 add-student-button px-3 py-2 text-nowrap'>Add New Student</button>
                        <AddStudentModal setShow={setShow} show={show} setStudentDatas={setStudentDatas} studentDatas={studentDatas}/>
                    </div>
                </div>
            </form>

            <div className='col-md-12 student-data-container px-5 '>
                <div className='d-flex py-4 name-email-action-container'>
                    <p className='col-5 student-name-title m-0 px-4'>Name</p>
                    <p className='col-3 student-email-title m-0'>Email</p>
                    <p className='col-4 student-action-title m-0'>Action</p>
                </div>




                {
                    studentDatas.map((item)=>{
                        return(
                            <div key={item.id} className='d-flex justify-content-between py-4 student-datas'>
                                <p className='col-5 px-4'>{item.name}</p>
                                <p className='col-3'>{item.email}</p>
                                <div className='col-4 d-flex gap-2 align-items-center justify-content-center'>
                                    <button className='action-buttons'><img src="./images/editIcon.png" alt="" /></button>
                                    <button onClick={()=>{handleDeleteMoadalShow();deleteId(item.id)}} className='action-buttons'><img src="./images/deleteIcon.png" alt="" /></button>
                                    <button className='action-buttons'><img src="./images/eyeIcon.png" alt="" /></button>
                                </div>
                            </div>
                        )
                    })
                }
                

            </div>
        </div>

        <Modal show={deleteModal} onHide={handleDeleteModalClose }>
            <Modal.Header closeButton>
                <Modal.Title>Alert</Modal.Title>
            </Modal.Header>
                <Modal.Body>Are you sure to delete user</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleDeleteModalClose }>
                    Cancel
                </Button>
                <Button variant="danger" onClick={() => handleStudentDelete(dltId)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>

    </div>
        
  )
}

export default Students;