import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/LoginPage/Login";
import SignUp from "./Components/SignUpPage/SignUp";
import Profile from "./Components/Profile/profile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/registrationForm" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
