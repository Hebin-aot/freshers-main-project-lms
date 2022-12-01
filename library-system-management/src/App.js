import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";
import Students from "./Admin/students/Students";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from "./Admin/AllBooks/AllBooks";
import IssuedBooks from "./Admin/IssuedBooks/IssuedBooks";
import StudentProfile from "./Admin/students/StudentProfile";
import StudentNavbar from "./Student/StudentNavbar";
import StudentAllBooks from "./Student/Student_All_books/StudentAllBooks";
//to get the data from local storage
const getLocalStudents = () => {
    let student = localStorage.getItem("students");

    if (student) {
        return JSON.parse(localStorage.getItem("students"));
    } else {
        return [];
    }
};

//book LocalStorage
const getLocalBooks = () => {
    let book = localStorage.getItem("books");

    if (book) {
        return JSON.parse(localStorage.getItem("books"));
    } else {
        return [];
    }
};

//issuedbook local storage
const getLocalIssuedBooks = () => {
    let issuedBook = localStorage.getItem("issuedBooks");

    if (issuedBook) {
        return JSON.parse(localStorage.getItem("issuedBooks"));
    } else {
        return [];
    }
};

const studentContext = createContext();
const bookContext = createContext();
const issuedBookContext = createContext();

function App() {

    const [studentDatas, setStudentDatas] = useState(getLocalStudents());

    const [bookDatas, setBookDatas] = useState(getLocalBooks());

    const [issuedBookDatas, setIssuedBookDatas] = useState(getLocalIssuedBooks());

        //useState for setting user
        const [user, setUser] = useState({ email: "", password: "" });

        const [studentUser, setStudentUser] = useState({email:"", password:""});

        const [loginState, setLoginState] = useState(false);

    //add to local storage
    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(studentDatas));
    }, [studentDatas]);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(bookDatas));
    }, [bookDatas]);

    useEffect(() => {
        localStorage.setItem("issuedBooks", JSON.stringify(issuedBookDatas));
    }, [issuedBookDatas]);


    //temporary admin details
    const adminUser = {
        email: "admin@gmail.com",
        password: "admin123",
    };

    // let StudentUSER={
    //   email:"a@gmail.com",
    //   password:"123",
    // };



    const Login = (details) => {

        if (details.email === adminUser.email && details.password === adminUser.password) {
            setUser({
                email: details.email,
            });
        } else {
        }
    };

    const StudentLogin = (data) => {

        let studentEmail;
        let studentPassword;

        studentDatas.find((x)=>{
            if( data.email === x.email && data.password === x.password)
            return (studentEmail = x.email,studentPassword = x.password)
        })

      if(data.email === studentEmail && data.password === studentPassword){
        setStudentUser({
          email: data.email,
        });
      } else {

      }
      console.log(studentUser)
    };

    return (
        <div className="App">
            <studentContext.Provider value={[studentDatas, setStudentDatas]}>
                <bookContext.Provider value={[bookDatas, setBookDatas]}>
                    <issuedBookContext.Provider value={[issuedBookDatas, setIssuedBookDatas]}>
                        <Router>
                            <Routes>
                                <Route
                                    exact
                                    path="/"
                                    element={loginState?(studentUser.email !== "" ? <StudentAllBooks/> : <LoginForm Login={Login} StudentLogin={StudentLogin} loginState={loginState} setLoginState={setLoginState}/>):(user.email !== "" ? <Students /> : <LoginForm Login={Login} StudentLogin={StudentLogin} loginState={loginState} setLoginState={setLoginState}/>)}
                                />
                                <Route path="/students" element={<Students />} />
                                <Route path="/all-books" element={<AllBooks />} />
                                <Route path="/issued-books" element={<IssuedBooks />} />
                                <Route path="/student-profile/:id" element={<StudentProfile />} />
                            </Routes>
                        </Router>
                    </issuedBookContext.Provider>
                </bookContext.Provider>
            </studentContext.Provider>
        </div>
    );
}

export default App;
export { studentContext };
export { bookContext };
export { issuedBookContext };
