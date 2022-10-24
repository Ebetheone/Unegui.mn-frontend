import { useState } from "react";
import Button from "../General/Button";
import "./style.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const showDown = () => {
    setOpen(true);
  };
  const hideDown = () => {
    setOpen(false);
  };
  return (
    <div
      className="Nav--Container"
      onClick={() => {
        props.hide();
        props.noreveal();
        props.hideDropDown();
      }}
    >
      <div className="NavBar--Content">
        <NavLink exact to={"/"}>
          <div className="Nav--Logo">
            <img src="https://www.unegui.mn/static/images/unegui-logo.png?_=1" />
          </div>
        </NavLink>
        <div
          className="Nav--Text--Content"
          onMouseEnter={showDown}
          onMouseLeave={hideDown}
        >
          <div className="Nav--Texts">
            <p className="white">Миний зарууд </p>
            <p className="Transparent">Нэвтрэх ба бүртгэл</p>
            <div className="block">
              {open ? (
                <div className="block">
                  <div className="bla">
                    <Button>Нэвтрэх</Button>
                    <p>Миний зарууд</p>
                    <p>Сайтын тохиргоо</p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="images">
          <NavLink to={"/login"} style={{textDecoration:"none"}}>
          <img src="https://www.unegui.mn/static/images/header/unegui/i_fav.svg" />
          </NavLink>
          <NavLink to={"/login"} style={{textDecoration:"none"}}>
          <img src="https://www.unegui.mn/static/images/chat/header/unegui.svg" />
          </NavLink>
          <Button>Зар Нэмэх</Button>
        </div>
        <button className="burger" onClick={props.toggleSideBar}>☰</button>
      </div>
    </div>
  );
};

export default Navbar;
