import "./style.scss";
import Button from "../General/Button";
import { useState } from "react";
import VidAd from "../../data/VipAd.json";
import SpecialAd from "../../data/SpecialAd.json";
import OrdinaryAd from "../../data/OrdinaryAd.json";
import { NavLink } from "react-router-dom";

const Informations = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
  };
  const hide = () => {
    setOpen(false);
  };
  return (
    <div
      id="informations"
      onClick={() => {
        props.hideDropDown();
        props.hide();
      }}
    >
      <div className="modal">
        <div className="toggle" onClick={toggle}>
          <div className="button">
            <div className="circle"></div>
          </div>
          <span>Хайлтын дагуу шинэ зарууд үзэж байх</span>
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
        <Button>Зар нэмэх</Button>
      </div>
      <div className="vip">
        <h1 className="itemtitle">VIP зар</h1>
        {VidAd.map((item, index) => (
          <NavLink to={"/buy"} style={{ textDecoration: "none" }}>
            <div className="container" key={index}>
              <div className="btn">VIP</div>
              <div className="flexbox">
                <a href="">{item.title}</a>
                <p>{item.desc}</p>
                <div className="private">
                  <span>{item.name}</span>
                  <span>{item.date}</span>
                </div>
                <h2>{item.type}</h2>
              </div>
              <div className="save">
                <h1 className="salary">{item.salary}</h1>
                <img src="/images/star.png" alt="savebtn" />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="special">
        <h1 className="itemtitle">Онцгой зар</h1>
        {SpecialAd.map((data, index) => (
          <NavLink to={"/buy"} style={{ textDecoration: "none" }}>
            <div className="container" key={index}>
              <div className="btn">Онцгой</div>
              <div className="flexbox">
                <a href="">{data.title}</a>
                <p>{data.desc}</p>
                <div className="private">
                  <span>{data.name}</span>
                  <span>{data.date}</span>
                </div>
                <h2>{data.type}</h2>
              </div>
              <div className="save">
                <h1 className="salary">{data.salary}</h1>
                <img src="/images/star.png" alt="savebtn" />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="ordinary">
        <h1 className="itemtitle">Энгийн зар</h1>
        {OrdinaryAd.map((list, index) => (
          <NavLink to={"/buy"} style={{ textDecoration: "none" }}>
            <div className="container" key={index}>
              <div className="flexbox">
                <a href="">{list.title}</a>
                <p>{list.desc}</p>
                <div className="private">
                  <span>{list.name}</span>
                  <span>{list.date}</span>
                </div>
                <h2>{list.type}</h2>
              </div>
              <div className="save">
                <h1 className="salary">{list.salary}</h1>
                <img src="/images/star.png" alt="savebtn" />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="btns">
        <div className="pages">
          <ul>
            <li>
              <a href="" className="c1">
                1
              </a>
            </li>
            <li>
              <a href="" className="c2">
                2
              </a>
            </li>
            <li>
              <a href="" className="c3">
                3
              </a>
            </li>
          </ul>
        </div>
        <a href="" className="next">
          Дараагийн зар &gt;&gt;
        </a>
      </div>
      <a href="#upper" style={{ textDecoration: "none" }}>
        <div className="scroll">
          <img src="/images/arrow.png" alt="arrow" />
        </div>
      </a>
    </div>
  );
};

export default Informations;
