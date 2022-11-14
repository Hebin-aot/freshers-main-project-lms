import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import './App.css';
import Students from './Admin/students/Students';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllBooks from './Admin/AllBooks/AllBooks';
import IssuedBooks from './Admin/IssuedBooks/IssuedBooks';

function App() {

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
      <Router>
        <Routes>
          <Route exact path='/students' element=
            {

              (user.email !== "") ? (

                <Students/>

                ) : ( 
                  <LoginForm Login={Login}/>
              )

            }/>
          <Route path='/allbooks' element={<AllBooks/>}/>
          <Route path='/issuedbooks' element={<IssuedBooks/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
