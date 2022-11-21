import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react";
import LoginForm from "./components/LoginForm";
import './App.css';
import Students from './Admin/students/Students';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from './Admin/AllBooks/AllBooks';
import IssuedBooks from './Admin/IssuedBooks/IssuedBooks';
import StudentProfile from './Admin/students/StudentProfile';


const studentContext = createContext()
const bookContext = createContext()
const issuedBookContext = createContext()

function App() {

  
  
  const [studentDatas, setStudentDatas] = useState([])

  const [bookDatas, setBookDatas] = useState([])

  const [issuedBookDatas, setIssuedBookDatas] = useState([])



  
  //temporary admin details
  const adminUser = {
    email:"admin@gmail.com",
    password:"admin123"
  }

  //useState for setting user
  const [user, setUser] = useState({email:"",password:""});




  const Login = (details) => {
    console.log(details)
    if (details.email === adminUser.email && details.password === adminUser.password){
      setUser({
        email:details.email,
      })
    }else{

    }
  }


  return (
    <div className="App">
      <studentContext.Provider value={[studentDatas, setStudentDatas]}>
        <bookContext.Provider value={[bookDatas, setBookDatas]}>
          <issuedBookContext.Provider value={[issuedBookDatas, setIssuedBookDatas]}>
            <Router>
              <Routes>
                <Route exact path='/' element=
                  {

                    (user.email !== "") ? (

                      <Students/>

                      ) : ( 
                        <LoginForm Login={Login}/>
                    )

                  }/>
                <Route path='/students' element={<Students/>}/>
                <Route path='/all-books' element={<AllBooks/>}/>
                <Route path='/issued-books' element={<IssuedBooks/>}/>
                <Route path='/student-profile' element={<StudentProfile/>}/>
              </Routes>
            </Router>
            </issuedBookContext.Provider>
        </bookContext.Provider>
      </studentContext.Provider>
    </div>
  );
}

export default App;
export {studentContext}
export {bookContext}
export {issuedBookContext}

