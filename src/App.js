import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateLetter from "./pages/CreateLetter";
import Navigation from "./pages/Navigation";
import Error404 from "./pages/Error404";

import UseEditor from "./hooks/Editor";

export default function App() {
  const [value, setValue] = React.useState({});
  const updateVal = (val) => setValue(val);
  return (
    <div className="App">
      <UseEditor.Provider value={{ value, updateVal }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="create" element={<CreateLetter />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UseEditor.Provider>
    </div>
  );
}
