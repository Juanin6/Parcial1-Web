import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Home from "./components/home";
import Detail from "./components/detail";
import { LanguageContext } from "./i18n";
import { useContext } from "react";
function App() {
  const { switchLanguage } = useContext(LanguageContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login switchLanguage={switchLanguage}></Login>}
          ></Route>
          <Route
            path="/home"
            element={<Home switchLanguage={switchLanguage}></Home>}
          ></Route>
          <Route path="/detail" element={<Detail></Detail>}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
