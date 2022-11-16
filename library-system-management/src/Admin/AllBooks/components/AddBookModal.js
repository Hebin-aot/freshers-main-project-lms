import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import { useState } from 'react';
import shortid from "shortid"


function AddBookModal({addBookModal,setAddBookModal,bookDatas,setBookDatas}) {

    const [bookDetail, setBookDetail] = useState({id:"",bookName:"",author:"",language:"",totalCopies:"",remaining:""})


    const handleAddBookModalClose = () => setAddBookModal(false);

    const handleAddBookModalSubmit = () => {
        setBookDatas([...bookDatas,bookDetail])
        console.log(bookDatas)
        handleAddBookModalClose()
    }

  return (
    <Modal show={addBookModal} onHide={handleAddBookModalClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Add Book</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="" onChange={e=>setBookDetail({...bookDetail,bookName:e.target.value,id:shortid.generate()})} value={bookDetail.bookName} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Author</Form.Label>
                          <Form.Control type="text" placeholder="" onChange={e=>setBookDetail({...bookDetail,author:e.target.value})} value={bookDetail.author} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Language</Form.Label>
                          <Form.Select type="email" placeholder="name@example.com" onChange={e=>setBookDetail({...bookDetail,language:e.target.value})} value={bookDetail.language}>
                              <option> select Language</option>
                              <option value="English">English</option>
                              <option value="Malayalam">Malayalam</option>
                              <option value="Hindi">Hindi</option>
                          </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3 d-flex justify-content-between" controlId="exampleForm.ControlInput1">
                          <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
                              <Form.Label>Total Copies</Form.Label>
                              <Form.Control type="number"  onChange={e=>setBookDetail({...bookDetail,totalCopies:e.target.value})} value={bookDetail.totalCopies}/>
                          </Form.Group>
                          <Form.Group className="mb-3 col-6" controlId="exampleForm.ControlInput1">
                              <Form.Label>Remaining</Form.Label>
                              <Form.Control type="number"  onChange={e=>setBookDetail({...bookDetail,remaining:e.target.value})} value={bookDetail.remaining}/>
                          </Form.Group>
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleAddBookModalClose}>
                      Cancel
                  </Button>
                  <Button variant="primary" onClick={handleAddBookModalSubmit}>
                      Add Book
                  </Button>
              </Modal.Footer>
          </Modal>
  )
}

export default AddBookModal