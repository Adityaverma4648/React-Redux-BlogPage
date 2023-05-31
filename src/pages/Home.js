import React from 'react';
import Header from "../components/Header";
import Post from '../components/Post';

const Home = () => {
  return (
    <div className="container-fluidd-flex flex-column justify-content-start align-items-center" style={{height:"100vh"}}>
    <Header />
    <Post />
  </div>
  )
}

export default Home