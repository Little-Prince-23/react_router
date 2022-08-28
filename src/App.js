import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import User from "./components/User";
import About2 from "./components/nesting/About2";
import About3 from "./components/nesting/About3";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="about2" element={<About2 />}></Route>
          <Route path="about3" element={<About3 />}></Route>
        </Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
