import React from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar.jsx';
import Home from './components/Home/Home.jsx';
import Upload from "./components/Upload/Upload.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import LoginForm from './components/Login/LoginForm.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [fileUrl, setFileUrl] = React.useState("");

  return (
    <>
     <Router>
     <AppNavBar />
     <br />
     <h1>moje ćwiczenia z kodowania</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/upload" element={<Upload fileUrl={fileUrl} setFileUrl={setFileUrl}/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
