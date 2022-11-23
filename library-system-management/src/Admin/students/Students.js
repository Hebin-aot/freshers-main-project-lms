import React from "react";
import "./Students.css";
import StudentSearch from "./components/StudentSearch";
import AdminNavbar from "../AdminNavbar";
import AddStudentModal from "./components/AddStudentModal";
import { useState } from "react";
import { studentContext } from "../../App";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/esm/Form";
import { Link } from "react-router-dom";
import { studentProfileContext } from "../../App";


function Students() {
    //States for Modal
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const handleDeleteModalClose = () => setDeleteModal(false);
    const handleDeleteMoadalShow = () => setDeleteModal(true);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    //state for searching student
    const [searchStudent, setSearchStudent] = useState("");

    //state for selecting student for edit
    const [selectedStudent, setSelectedStudent] = useState([]);

    //state containing all datas of student
    const [studentDatas, setStudentDatas] = useContext(studentContext);

    const [studentProfileDetails, setStudentProfileDetails] = useContext(studentProfileContext)

    //state for selecting id of student to delete
    const [dltId, setdltId] = useState("");

    //student Delete Function
    const handleStudentDelete = (dltid) => {
        setStudentDatas(studentDatas.filter((item) => dltid !== item.id));
        handleDeleteModalClose();
    };

    const deleteId = (id) => {
        setdltId(id);
    };


    //function for editing student
    const editStudent = (student) => {
        setSelectedStudent(student);
        console.log(selectedStudent);
    };

    const handleAddStudent = () => {
        setSelectedStudent(null);
    };


    const handleStudentProfileView = (item) => {
        setStudentProfileDetails(item)
        console.log(studentProfileDetails)
    }

    

    return (
        <div className="d-flex">
            <AdminNavbar/>
            <div className="student-container col-md-10 p-5">
                <form action="">
                    <div className="student-title p-3">
                        <label htmlFor="Students">Students</label>
                    </div>
                    <div className="student-searchadd-container d-flex align-items-center justify-content-between py-5">
                        <div className="col-md-6">
                            <Form.Control
                                className="studentSearchIcon"
                                onChange={(e) => {
                                    setSearchStudent(e.target.value);
                                }}
                                type="text"
                                placeholder="Search by student name or email"
                            />
                        </div>
                        <div className="col-md-2 ">
                            <button
                                type="button"
                                onClick={() => {
                                    handleShow();
                                    setEditModal();
                                    handleAddStudent();
                                }}
                                className="col-12 add-student-button px-3 py-2 text-nowrap"
                            >
                                Add New Student
                            </button>
                            <AddStudentModal
                                setShow={setShow}
                                show={show}
                                setStudentDatas={setStudentDatas}
                                studentDatas={studentDatas}
                                setEditModal={setEditModal}
                                editModal={editModal}
                                selectedStudent={selectedStudent}
                                setSelectedStudent={setSelectedStudent}
                            />
                        </div>
                    </div>
                </form>

                <div className="col-md-12 student-data-container px-5 ">
                    <div className="d-flex py-4 name-email-action-container">
                        <p className="col-5 student-name-title m-0 px-4">Name</p>
                        <p className="col-3 student-email-title m-0">Email</p>
                        <p className="col-4 student-action-title m-0">Action</p>
                    </div>

                    {studentDatas
                        ?.filter((val) => {
                            if (StudentSearch === "") {
                                return val;
                            } else if (val?.name.toLocaleLowerCase().includes(searchStudent.toLocaleLowerCase())) {
                                return val;
                            }
                            return 0;
                        })
                        .map((item) => {
                            return (
                                <div key={item.id} className="d-flex justify-content-between py-4 student-datas">
                                    <p className="col-5 px-4">{item?.name}</p>
                                    <p className="col-3">{item?.email}</p>
                                    <div className="col-4 d-flex gap-2 align-items-center justify-content-center">
                                        <button
                                            onClick={() => {
                                                handleShow();
                                                editStudent(item);
                                                setEditModal(true);
                                            }}
                                            className="action-buttons"
                                        >
                                            <img src="./images/editIcon.png" alt="" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleDeleteMoadalShow();
                                                deleteId(item.id);
                                            }}
                                            className="action-buttons"
                                        >
                                            <img src="./images/deleteIcon.png" alt="" />
                                        </button>
                                        <Link to="/student-profile">
                                            <button className="action-buttons" onClick={()=>handleStudentProfileView(item)}>
                                                <img src="./images/eyeIcon.png" alt="" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
                        
            {/* delete pop up */}
            <Modal show={deleteModal} onHide={handleDeleteModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Alert</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteModalClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => handleStudentDelete(dltId)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Students;
