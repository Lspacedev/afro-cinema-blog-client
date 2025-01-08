import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedAuth from "./components/ProtectedAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<ProtectedAuth />}>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Route>
          <Route exact path="/" element={<Home />}>
            <Route exact path="/posts/:post_id" element={<Post />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
