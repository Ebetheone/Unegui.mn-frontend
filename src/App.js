import { useState } from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buypage from "./pages/Buypage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Login from "./pages/Loginpage";
import Filterpage from "./pages/Filterpage";
import Hamburger from "./components/Hamburger";
import Partnerpage from "./pages/Partnerpage";
import Mobile from "./components/MobileHome";
import MobileFilter from "./components/MobileFilter";
import Detail from "./components/Detail";
import MobileItem from "./components/MobileItem";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };
  const showDropDown = () => {
    setIsOpen((prev) => !prev);
  };
  const hideDropDown = () => {
    setIsOpen(false);
  };
  const show = () => {
    setOpen((prev) => !prev);
  };
  const hide = () => {
    setOpen(false);
  };
  const yesreveal = () => {
    setReveal(true);
  };
  const noreveal = () => {
    setReveal(false);
  };
  return (
    <BrowserRouter>
      <Navbar
        hideDropDown={hideDropDown}
        hide={hide}
        noreveal={noreveal}
        toggleSideBar={toggleSideBar}
      />
      <Hamburger showSidebar={showSidebar} toggleSideBar={toggleSideBar} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              isOpen={isOpen}
              showDropDown={showDropDown}
              hideDropDown={hideDropDown}
            />
          }
        />
        <Route path="/buy" element={<Buypage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/filter"
          element={
            <Filterpage
              isOpen={isOpen}
              showDropDown={showDropDown}
              hideDropDown={hideDropDown}
              open={open}
              show={show}
              hide={hide}
              reveal={reveal}
              yesreveal={yesreveal}
              noreveal={noreveal}
            />
          }
        />
        <Route path="/partner" element={<Partnerpage />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/mobilefilter" element={<MobileFilter />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mobileitem" element={<MobileItem />} />
      </Routes>
      <News />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
