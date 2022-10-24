import "./style.scss";
import { useState } from "react";
import States from "../../data/States.json";
import { NavLink } from "react-router-dom";

const MobileFilter = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const toggle = () => {
    setOne((prev) => !prev);
    setTwo(false);
    setThree(false);
    setFour(false);
  };
  const open = () => {
    setTwo((prev) => !prev);
    setOne(false);
    setThree(false);
    setFour(false);
  };
  const reveal = () => {
    setThree((prev) => !prev);
    setOne(false);
    setTwo(false);
    setFour(false);
  };
  const show = () => {
    setFour((prev) => !prev);
    setOne(false);
    setTwo(false);
    setThree(false);
  };
  return (
    <div className="mobilefilter">
      <div className="open">
        <h1 className="title">Шүүлтүүр</h1>
        <NavLink to={"/mobile"} style={{ textDecoration: "none" }}>
          <button className="cancel">Бүгдийг цуцлах</button>
        </NavLink>
      </div>
      <div className="search">
        <div className="div">
          <h1 className="searchtitle">Хайх</h1>
          <input />
        </div>
      </div>
      <div className="type">
        <div className="div">
          <h1 className="typetitle">Төрөл</h1>
          <div className="flex">
            <button className="all">Бүх зарууд</button>
            <img
              src="https://www.unegui.mn/static/images/filter/rectangle_arrow_right.png"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div className="price">
        <div className="div">
          <h1 className="pricetitle">Үнэ</h1>
          <div className="flex">
            <div className="one" onClick={toggle}>
              <input type="button" />
              <p>доод</p>
              <img
                src="https://www.unegui.mn/static/images/filter/rectangle_arrow_down.png"
                alt="arrow"
              />
            </div>
            {one && (
              <div className="absolute">
                <span>1</span>
                <span>100</span>
                <span>1000</span>
                <span>5000</span>
                <span>10000</span>
                <span>20000</span>
                <span>50000</span>
                <span>100000</span>
              </div>
            )}
            <div className="two" onClick={open}>
              <input type="button" />
              <p>дээд</p>
              <img
                src="https://www.unegui.mn/static/images/filter/rectangle_arrow_down.png"
                alt="arrow"
              />
            </div>
            {two && (
              <div className="abs">
                <span>1</span>
                <span>100</span>
                <span>1000</span>
                <span>5000</span>
                <span>10000</span>
                <span>20000</span>
                <span>50000</span>
                <span>100000</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="change" onClick={reveal}>
        <div className="div">
          <h1 className="changetitle">Солино</h1>
          <img
            src="https://www.unegui.mn/static/images/filter/rectangle_arrow_down.png"
            alt="arrow"
          />
        </div>
        {three && (
          <div className="boolean">
            <p>тийм</p>
            <p>үгүй</p>
          </div>
        )}
      </div>
      <div className="location" onClick={show}>
        <div className="div">
          <h1 className="changetitle">Байршил</h1>
          <p>Бүх байршил</p>
          <img
            src="https://www.unegui.mn/static/images/filter/rectangle_arrow_down.png"
            alt="arrow"
          />
        </div>
        {four && (
          <div className="states">
            {States.map((item, index) => (
              <p key={index}>{item.state}</p>
            ))}
          </div>
        )}
      </div>
      <div className="emptyarea"></div>
      <div className="redbtn">Хайх</div>
    </div>
  );
};

export default MobileFilter;
