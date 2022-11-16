import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react";
import LoginForm from "./components/LoginForm";
import './App.css';
import Students from './Admin/students/Students';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from './Admin/AllBooks/AllBooks';
import IssuedBooks from './Admin/IssuedBooks/IssuedBooks';

const studentContext = createContext()
const bookContext = createContext()

function App() {

  const [studentDatas, setStudentDatas] = useState([])

  const [bookDatas, setBookDatas] = useState([])
  
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
      alert("err")
    }
  }


  return (
    <div className="App">
      <studentContext.Provider value={[studentDatas, setStudentDatas]}>
        <bookContext.Provider value={[bookDatas, setBookDatas]}>
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
              <Route path='/all-books' element={<AllBooks/>}/>
              <Route path='/issued-books' element={<IssuedBooks/>}/>
            </Routes>
          </Router>
        </bookContext.Provider>
      </studentContext.Provider>
    </div>
  );
}

export default App;
export {studentContext}
export {bookContext}
