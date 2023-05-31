import "./App.css";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";


export default function App() {
  return (
      <>
        <BrowserRouter>
          <Navbar />  
          <Routes>         
            <Route path="/" element={<Home />} exact ></Route>
            <Route path="/signUp" element={<SignUp />}  ></Route>
            <Route path="/login" element={<Login />} ></Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}
