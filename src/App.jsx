import "./input.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav"
import Home from "./component/Home";
import Owner from "./component/Owner";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
