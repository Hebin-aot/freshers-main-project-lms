import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/esm/Form";
import { useEffect, useState } from "react";
import shortid from "shortid";

function AddBookModal({
    addBookModal,
    setAddBookModal,
    bookDatas,
    setBookDatas,
    bookEditModal,
    setBookEditModal,
    selectedBook,
    setSelectedBook,
}) {
    //const [bookDetail, setBookDetail] = useState()

    const [bookName, setBookName] = useState(null);
    const [author, setAuthor] = useState(null);
    const [language, setLanguage] = useState(null);
    const [totalCopies, setTotalCopies] = useState(null);
    const [remaining, setRemaning] = useState();

    const [formValidation, setFormValidation] = useState(false)

    const handleAddBookModalClose = () => setAddBookModal(false);

    const handleAddBookModalSubmit = () => {

        const bookDetail = {
            id: shortid.generate(),
            bookName: bookName,
            author: author,
            language: language,
            totalCopies: totalCopies,
            remaining: remaining,
        };

        if(bookName === '' || author === '' || language === '' || totalCopies === '' || remaining === '' ){
            setFormValidation(true) 
        }else{
            setBookDatas([...bookDatas, bookDetail]);
            console.log(bookDatas);
            handleAddBookModalClose();
        }
    };

    useEffect(() => {
        setBookName(selectedBook?.bookName || "");
        setAuthor(selectedBook?.author || "");
        setLanguage(selectedBook?.language || "");
        setTotalCopies(selectedBook?.totalCopies || "");
        setRemaning(selectedBook?.remaining || "");
    }, [selectedBook]);

    const handleEditBookSubmit = () => {
        if(bookName === '' || author === '' || language === '' || totalCopies === '' || remaining === '' ){
            setFormValidation(true) 
        }else {
            setBookDatas((bookDatas) =>
                bookDatas.map((obj) => {
                    if (obj.id === selectedBook.id) {
                        return {
                            ...obj,
                            bookName: bookName,
                            author: author,
                            language: language,
                            totalCopies: totalCopies,
                            remaining: remaining,
                        };
                    }
                    return obj;
                })
            );
            handleAddBookModalClose();
        }   
    };

    return (
        <Modal show={addBookModal} onHide={handleAddBookModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>{bookEditModal ? "Edit Book" : "Add Book"}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-sub-heads">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            onChange={(e) => setBookName(e.target.value)}
                            value={bookName || ""}
                        />
                        {formValidation && !bookName ?<Form.Label className="text-danger">Please enter the book name</Form.Label>:""}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            onChange={(e) => setAuthor(e.target.value)}
                            value={author || ""}
                        />
                        {formValidation && !author ?<Form.Label className="text-danger">Please enter the Author</Form.Label>:""}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Language</Form.Label>
                        <Form.Select
                            type="text"
                            placeholder=""
                            onChange={(e) => setLanguage(e.target.value)}
                            value={language || ""}
                        >
                            <option> select Language</option>
                            <option value="English">English</option>
                            <option value="Malayalam">Malayalam</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Portuguese">Portuguese</option>
                        </Form.Select>
                        {formValidation && !language ?<Form.Label className="text-danger">Please select the language</Form.Label>:""}
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="exampleForm.ControlInput1">
                        <Form.Group className="mb-3 mx-1 col-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Total Copies</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(e) => setTotalCopies(e.target.value)}
                                value={totalCopies || ""}
                            />
                            {formValidation && !totalCopies ?<Form.Label className="text-danger">Please enter the number of copies</Form.Label>:""}
                        </Form.Group>
                        <Form.Group className="mb-3 col-6 ms-1 " controlId="exampleForm.ControlInput1">
                            <Form.Label>Remaining</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(e) => setRemaning(e.target.value)}
                                value={remaining || ""}
                            />
                            {formValidation && !remaining ?<Form.Label className="text-danger">Please enter the remaining number of copies</Form.Label>:""}
                        </Form.Group>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="issue-book-modal-cancel px-3 py-2" onClick={handleAddBookModalClose}>
                    Cancel
                </button>
                <button className="issue-book-modal-button px-3 py-2" onClick={bookEditModal ? handleEditBookSubmit : handleAddBookModalSubmit}>
                    {bookEditModal ? "save" : "submit"}
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddBookModal;
