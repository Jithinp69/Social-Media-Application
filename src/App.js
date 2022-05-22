import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './Components/home/home';
import Friends from "./Components/friends/friends";
import Posts from "./Components/posts/posts";
import Login from "./Components/LoginPage/Login";
import SignUp from "./Components/SignUpPage/SignUp";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/registrationForm" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/friends' element={<Friends />}></Route>
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </Router>

      <Footer />

    </>
  );
}

export default App;
