import {Route,Routes,Navigate} from  "react-router-dom"
import { Main } from "./components/Main/Main";
import { Signup } from './components/Signup/Signup';
import { Login } from './components/Login/Login';
import {Loader}  from "./components/layout/Loader"
import { Profile } from "./components/Profile/Profile";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Sports} from "./components/Main/Sports"

function App() {
  const user = localStorage.getItem("token")
  return (
<>
    <Routes>
    <Route path="/" exact element={<Main/>}/>
    <Route path = "/sports" exact element = {<Sports/>}/>
     <Route path="/signup" exact element={<Signup/>}/>
     <Route path="/login" exact element={<Login/>}/>
     <Route path="/dashboard" exact element={<Profile/>}/>
    </Routes>
</>
  );
}

export default App;
