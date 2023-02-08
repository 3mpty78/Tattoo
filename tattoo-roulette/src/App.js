import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artists from "./Pages/Artists";
import Contact from "./Pages/Contact";
import Heal from "./Pages/Heal";
import Home from "./Pages/Home";
import Infos from "./Pages/Infos";
import Spin from "./Pages/Spin";
import "./Styles/index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/spin" element={<Spin />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/heal" element={<Heal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
