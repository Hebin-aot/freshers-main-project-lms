import React from "react";
import { Link } from "react-router-dom";
import "./StudentUser.css"

function StudentNavbar() {
    return (
        <div className="student-navigation-bar col-md-2 sticky-top">
            <div className="logoContainer  d-flex align-items-center gap-2 p-5">
                <img src="/images/LMSwhiteLogo.png" alt="" />
                <p className="lmsWhiteText m-0">LMS</p>
            </div>
            <div className="student-navigation-tab-container d-flex flex-column align-items-center gap-4">

                <Link to={"/student-my-books"} className="col-md-10">
                    <button className="col-md-10 d-flex gap-3">
                        {" "}
                        <img src="/images/allBooks.png" alt="" /> My Books
                    </button>
                </Link>

                <Link to={"/student-all-books"} className="col-md-10">
                    <button className="d-flex gap-3 col-md-10">
                        {" "}
                        <img src="/images/studentsLogo.png" alt="" /> All Books
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default StudentNavbar;
