import { Route, Routes } from "react-router-dom";

import { Navbar, Games, Terms, Contact, Homepage, Futr } from "./Components";
import "./Styles.css";

const App = () => {
  return (
    <>
      <section>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/games" element={<Games />}></Route>
          <Route exact path="/terms" element={<Terms />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Futr />
      </section>
    </>
  );
};

export default App;
