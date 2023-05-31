import "./App.css";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


export default function App() {
  return (
      <>
         <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact ></Route>
            <Route path="/signUp" element={<SignUp />} exact ></Route>

          </Routes>
        </BrowserRouter>
      </>
  );
}
