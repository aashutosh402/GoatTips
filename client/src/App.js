import {Route,Routes,Navigate} from  "react-router-dom"
import { Main } from "./components/Main/Main";
import { Signup } from './components/Signup/Signup';
import { Login } from './components/Login/Login';
import {Loader}  from "./components/layout/Loader"
import { Profile } from "./components/Profile/Profile";

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
<Route path="/" exact element={<Main/>}/>
     <Route path="/signup" exact element={<Signup/>}/>
     <Route path="/login" exact element={<Login/>}/>
     <Route path="/dashboard" exact element={<Profile/>}/>
     
     {/* <Route path="/" exact element={<Navigate replace to = "/login"/>}/> */}
    </Routes>
  );
}

export default App;
