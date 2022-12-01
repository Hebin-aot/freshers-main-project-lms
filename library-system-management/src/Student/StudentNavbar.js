import React from "react";
import { Link } from "react-router-dom";

function StudentNavbar() {
    return (
        <div className="navigation-bar col-md-2 sticky-top">
            <div className="logoContainer  d-flex align-items-center gap-2 p-5">
                <img src="/images/LMSwhiteLogo.png" alt="" />
                <p className="lmsWhiteText m-0">LMS</p>
            </div>
            <div className="admin-navigation-tab-container d-flex flex-column align-items-center gap-4">

                <div className="col-md-10">
                    <button className="col-md-10 d-flex gap-3">
                        {" "}
                        <img src="/images/issuedBook.png" alt="" /> Issued Books
                    </button>
                </div>

                <div className="col-md-10">
                    <button className="col-md-10 d-flex gap-3">
                        {" "}
                        <img src="/images/allBooks.png" alt="" /> All Books
                    </button>
                </div>

                <div className="col-md-10">
                    <button className="d-flex gap-3 col-md-10">
                        {" "}
                        <img src="/images/studentsLogo.png" alt="" /> Students
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default StudentNavbar;
