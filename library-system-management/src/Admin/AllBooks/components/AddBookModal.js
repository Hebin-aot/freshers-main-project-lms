import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/esm/Form';
import { useEffect, useState } from 'react';
import shortid from "shortid"


function AddBookModal({addBookModal,setAddBookModal,bookDatas,setBookDatas,bookEditModal,setBookEditModal,selectedBook,setSelectedBook}) {

    //const [bookDetail, setBookDetail] = useState()

    const [bookName, setBookName] = useState(null)
    const [author, setAuthor] = useState(null)
    const [language, setLanguage] = useState(null)
    const [totalCopies, setTotalCopies] = useState(null)
    const [remaining, setRemaning] = useState(null)



    const handleAddBookModalClose = () => setAddBookModal(false);

    const handleAddBookModalSubmit = () => {

        if (bookName && author && language && totalCopies && remaining !== ""){
        
        const bookDetail={id:shortid.generate(),bookName: bookName, author: author, language: language , totalCopies:totalCopies , remaining:remaining }

        setBookDatas([...bookDatas,bookDetail])
        console.log(bookDatas)
        handleAddBookModalClose()
        }
    }

    useEffect(()=>{
        setBookName(selectedBook?.bookName || "")
        setAuthor(selectedBook?.author || "")
        setLanguage(selectedBook?.language || "")
        setTotalCopies(selectedBook?.totalCopies || "")
        setRemaning(selectedBook?.remaining || "")
    },[selectedBook])

    const handleEditBookSubmit = () => {
        if (bookName && author && language && totalCopies && remaining !== "") {
            setBookDatas((bookDatas) =>
                bookDatas.map((obj) => {
                    if (obj.id === selectedBook.id) {
                        return { ...obj, bookName: bookName, author: author, language: language , totalCopies:totalCopies , remaining:remaining };
                    }
                    return obj;
                })
            );
        } else {
            console.log("please fill out form");
        }
        handleAddBookModalClose()
    }




  return (
    <Modal show={addBookModal} onHide={handleAddBookModalClose}>
              <Modal.Header closeButton>
                  <Modal.Title>{bookEditModal?"Edit Book" : "Add Book"}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Name</Form.Label>
                          <Form.Control 
                          type="text" 
                          placeholder="" 
                          onChange={e=>setBookName(e.target.value)} 
                          value={bookName || ""} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Author</Form.Label>
                          <Form.Control 
                          type="text" 
                          placeholder="" 
                          onChange={e=>setAuthor(e.target.value)} 
                          value={author || ""} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Language</Form.Label>
                          <Form.Select 
                          type="email" 
                          placeholder="name@example.com" 
                          onChange={e=>setLanguage(e.target.value)} 
                          value={language || ""}>
                              <option> select Language</option>
                              <option value="English">English</option>
                              <option value="Malayalam">Malayalam</option>
                              <option value="Hindi">Hindi</option>
                          </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3 d-flex justify-content-between" controlId="exampleForm.ControlInput1">
                          <Form.Group className="mb-3 mx-1 col-6" controlId="exampleForm.ControlInput1">
                              <Form.Label>Total Copies</Form.Label>
                              <Form.Control 
                              type="number"  
                              onChange={e=>setTotalCopies(e.target.value)} 
                              value={totalCopies || ""}/>
                          </Form.Group>
                          <Form.Group className="mb-3 col-6 ms-1 " controlId="exampleForm.ControlInput1">
                              <Form.Label>Remaining</Form.Label>
                              <Form.Control 
                              type="number"  
                              onChange={e=>setRemaning(e.target.value)} 
                              value={remaining || ""}/>
                          </Form.Group>
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleAddBookModalClose}>
                      Cancel
                  </Button>
                  <Button variant="danger" onClick={bookEditModal?handleEditBookSubmit :handleAddBookModalSubmit}>
                    {bookEditModal?"save" : "submit"}
                  </Button>
              </Modal.Footer>
          </Modal>
  )
}

export default AddBookModal