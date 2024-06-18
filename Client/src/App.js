import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Feedback from './Feedback';
import Header from './Header';
import Comments from './Comments';
import Profile from './Profile'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element = {<Login />} />
      <Route path='/feedback' element = {<Feedback />} />
      <Route path='/comments' element = {<Comments />} />
      <Route path='/profile' element = {<Profile />} />
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
