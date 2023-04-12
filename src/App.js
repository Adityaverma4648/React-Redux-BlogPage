import "./App.css";
import Header from "./components/Header.js";
import Post from "./components/Post.js";

export default function App() {
  return (
    <div className="container-fluidd-flex flex-column justify-content-start align-items-center" style={{height:"100vh"}}>
      <Header />
      <Post />
    </div>
  );
}
