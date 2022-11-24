import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState ,useEffect } from "react";
import LoginForm from "./components/LoginForm";
import './App.css';
import Students from './Admin/students/Students';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from './Admin/AllBooks/AllBooks';
import IssuedBooks from './Admin/IssuedBooks/IssuedBooks';
import StudentProfile from './Admin/students/StudentProfile';

//to get the data from local storage
const getLocalStudents = () => {
  let student = localStorage.getItem('students');

  if(student){
    return JSON.parse(localStorage.getItem('students'));
  }else{
    return [];
  }

}

//book LocalStorage
const getLocalBooks = () => {
  let book = localStorage.getItem('books');

  if(book){
    return JSON.parse(localStorage.getItem('books'));
  }else{
    return [];
  }

}

//issuedbook local storage
const getLocalIssuedBooks = () => {
  let issuedBook = localStorage.getItem('issuedBooks');

  if(issuedBook){
    return JSON.parse(localStorage.getItem('issuedBooks'));
  }else{
    return [];
  }
}

const getLocalStudentProfile = () => {
  let studentprofile = localStorage.getItem('studentProfile');

  if(studentprofile){
    return JSON.parse(localStorage.getItem('studentProfile'));
  }else{
    return [];
  }
}

const studentContext = createContext()
const bookContext = createContext()
const issuedBookContext = createContext()
const studentProfileContext = createContext()

function App() {
  
  const [studentDatas, setStudentDatas] = useState(getLocalStudents())

  const [bookDatas, setBookDatas] = useState(getLocalBooks())

  const [issuedBookDatas, setIssuedBookDatas] = useState(getLocalIssuedBooks())

  const [studentProfileDetails, setStudentProfileDetails] = useState(getLocalStudentProfile())


  //add to local storage
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(studentDatas))
  }, [studentDatas]);
  
  useEffect(() =>{
    localStorage.setItem('books', JSON.stringify(bookDatas))
  },[bookDatas])

  useEffect(()=>{
    localStorage.setItem('issuedBooks' ,JSON.stringify(issuedBookDatas))
  },[issuedBookDatas])

  useEffect(()=>{
    localStorage.setItem('studentProfile' ,JSON.stringify(studentProfileDetails))
  },[studentProfileDetails])
  
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
            <studentProfileContext.Provider value={[studentProfileDetails, setStudentProfileDetails]} >
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
                  <Route path='/student-profile/:id' element={<StudentProfile/>}/>
                </Routes>
              </Router>
            </studentProfileContext.Provider>
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
export {studentProfileContext}

