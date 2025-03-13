import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Home from "./components/home";
import Detail from "./components/detail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/detail" element={<Detail></Detail>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
