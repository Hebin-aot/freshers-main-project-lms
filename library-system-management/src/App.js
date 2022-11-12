import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import './App.css';

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
      alert("details doesn't match")
    }
  }



  return (
    <div className="App">
      {
        (user.email !== "") ? (
          <div className="welcome">
            <h1>welcome <span>{user.email}</span></h1>
          </div>
        ) : (
          <LoginForm Login={Login}/>
        )
      }
    </div>
  );
}

export default App;
