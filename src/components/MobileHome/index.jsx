import "./style.scss";
import Menus from "../../data/Menus.json";
import Sales from "../../data/Sales.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import States from "../../data/States.json";

const MobileHome = () => {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="Main">
      <div className="mobilehome">
        <form className="formone">
          <input type="text" placeholder="113,839 Зар байна" />
          <button className="button">
            <img
              src="https://www.unegui.mn/static/images/latest_search.svg?_=20423"
              alt="search"
            />
          </button>
        </form>
        <div className="flex">
          <form className="formtwo" onClick={Toggle}>
            <input type="button" />
            <button className="button">
              <img
                src="https://www.unegui.mn/static/images/region_icon.svg?_=20423"
                alt="search"
              />
              Бүх байршил
            </button>
          </form>
          {toggle && (
            <div className="absolute">
              {States.map((item, index) => (
                <p className="item" key={index}>
                  {item.state}
                </p>
              ))}
            </div>
          )}
          <form className="formthree">
            <NavLink to={"/mobilefilter"} style={{ textDecoration: "none" }}>
              <input type="button" />
              <button className="button">
                <img
                  src="https://www.unegui.mn/static/images/filters_icon.svg?_=20423"
                  alt="search"
                />
                Шүүлтүүр
              </button>
            </NavLink>
          </form>
        </div>
        <h1 className="Menutitle">Төрөлүүд</h1>
        <ul className="menus">
          {Menus.map((item, index) => (
            <NavLink to={"/detail"} style={{ textDecoration: "none" }}>
              <li className="menuitem" key={index}>
                <img src={item.img} alt="image" />
                <p>{item.title}</p>
              </li>
            </NavLink>
          ))}
        </ul>
        <h1 className="Maintitle">Бүх зарууд</h1>
        <div className="grid">
          {Sales.map((item, index) => (
            <div className="mainitem" key={index}>
              <img src={item.img} alt="image" />
              <span>{item.price}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <button className="all">Бүх 113695 зарыг харах</button>
      </div>
      <div className="subs">
        <NavLink exact to={"/"} className="subitem">
          <strong>Бүтэн хувилбар</strong>
        </NavLink>
        <NavLink exact to={"/rules"} className="subitem">
          Үйлчилгээний нөхцөл
        </NavLink>
        <NavLink exact to={"/licence"} className="subitem">
          Лицензийн гэрээ, License agreement
        </NavLink>
        <NavLink exact to={"/banner"} className="subitem">
          Баннер байршуулах
        </NavLink>
        <NavLink exact to={"/help"} className="subitem">
          Тусламж
        </NavLink>
        <NavLink exact to={"/safety"} className="subitem">
          Аюулгүй ажиллагаа
        </NavLink>
      </div>
    </div>
  );
};

export default MobileHome;
