import React, { useContext, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import shortid from "shortid";
import { bookContext } from "../../../App";
import { studentContext } from "../../../App";
import { Modal, Button } from "bootstrap";

function IssuedBookList({ book, returnId, setShowReturnBookModal, handleShowReturnBookModal }) {
    const [bookDatas, setBookDatas] = useContext(bookContext);
    const [studentDatas, setStudentDatas] = useContext(studentContext);

    const [bookTitle, setBookTitle] = useState("");
    const [dayDiff, setDayDiff] = useState(null);
    // const handleCloseReturnBookModal = () => setShowReturnBookModal(false);
    // const handleShowReturnBookModal = () => setShowReturnBookModal(true);

    var currentIssueDate = new Date(book?.issueDate);
    var Issuemonth = currentIssueDate.getMonth() + 1;
    var Issuedate = currentIssueDate.getDate();
    var Issueyear = currentIssueDate.getFullYear();
    const issueddatedisplay = Issuedate + "-" + Issuemonth + "-" + Issueyear;
    // const issueddate = issueobj.issuedate.getDate()+"-"+ issueobj.issuedate.getMonth()+1 + "-" + issueobj.issuedate.getFullYear()

    var currentDueDate = new Date(book?.issueDueDate);
    var Duemonth = currentDueDate.getMonth() + 1;
    var Duedate = currentDueDate.getDate();
    var Dueyear = currentDueDate.getFullYear();
    const dueddatedisplay = Duedate + "-" + Duemonth + "-" + Dueyear;

    useEffect(() => {
        var date1 = new Date();
        var date2 = new Date(Duemonth + "-" + Duedate + "-" + Dueyear);
        if (date1 > date2) {
            var diffDays = parseInt((date1 - date2) / (1000 * 60 * 60 * 24), 10);
            setDayDiff(diffDays);
        }
    }, [book]);

    return (
        <div className="px-4 py-4 d-flex py-4 px-4 gap-2 issuedbook-table-contents">
            {bookDatas.map((allbooks) => {
                if (allbooks?.id === book.issueBookName) {
                    return (
                        <p key={shortid.generate()} className="col-2 m-0">
                            {allbooks?.bookName}
                        </p>
                    );
                }
            })}
            {studentDatas?.map((allstudents) => {
                if (allstudents.id === book.issueStudentName) {
                    return (
                        <p key={shortid.generate()} className="col-2 m-0">
                            {allstudents?.name}
                        </p>
                    );
                }
            })}
            <p className="col-2 m-0">{issueddatedisplay}</p>
            <p className="col-2 m-0">{dueddatedisplay}</p>
            <p className="col-2 m-0 ps-4">{dayDiff * 10}</p>
            <button
                data-tip
                data-for="mark-return"
                className="issuebook-return-btn text-center"
                type="button"
                onClick={() => {
                    handleShowReturnBookModal();
                    returnId(book.id);
                    setBookTitle(book.issueBookName);
                }}
            >
                <img src="./images/returnIcon.png" alt="" />
            </button>
            <ReactTooltip id="mark-return" place="top" effect="solid">
                Mark as returned
            </ReactTooltip>
        </div>
    );
}

export default IssuedBookList;