import "./style.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import States from "../../data/States.json";
import Menus from "../../data/Menus.json";
import Sales from "../../data/Sales.json";

const Detail = () => {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => {
    setToggle((prev) => !prev);
  };
  const [open, setOpen] = useState(false);
  const change = () => {
    setOpen(true);
  };
  const hide = () => {
    setOpen(false);
  };
  return (
    <div className="detail">
      <div className="open">
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
        <h1 className="title">{Menus.slice(0, 1)[0].title}</h1>
        <div className="grid">
          {Menus.slice(0, 1)[0].submenu.map((item, index) => (
            <div className="flexbox">
              <p key={index}>{item.title}</p>
              <span>{Menus.slice(0, 1)[0].number}</span>
            </div>
          ))}
        </div>
        <div className="modal">
          <div className="toggle" onClick={change}>
            <span> Категорийн шинэ зарууд үзэх </span>
            <div className="button">
              <div className="circle"></div>
            </div>
          </div>
          {open ? (
            <div className="hide">
              <div className="titles">
                <h1>Таалагдсан хайлтын бүртгэл</h1>
                <img src="/images/close.png" alt="close" onClick={hide} />
              </div>
              <input type="email" placeholder="Е-Мэйл хаяг" />
              <button className="active">И-Мэйлээр мэдээлэл авч байх</button>
            </div>
          ) : null}
        </div>
        <div className="main">
          {Sales.map((item, index) => (
            <div className="peritem" key={index}>
              <img src={item.img} alt="image" />
              <div className="price">{item.price}</div>
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
              <div className="city">
                {item.date} {item.city}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
