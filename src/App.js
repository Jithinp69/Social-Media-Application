import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './Components/home/home';
import Friends from "./Components/friends/friends";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Posts from "./Components/posts/posts";

function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/friends' element={<Friends />}></Route>
          <Route path='/posts' element={<Posts />} />
          

        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
