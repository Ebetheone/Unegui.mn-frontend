import "./style.scss";
import Price from "../../data/price.json";
import { useState } from "react";

const Check = (props) => {
  const [toggle, setToggle] = useState(false);
  const [check, setCheck] = useState(false);
  const [open,setOpen] = useState(false);
  const [see, setSee] = useState(false);
  const [change ,setChange] = useState(false);
  const Toggle = () => {
    setToggle((prev) => !prev);
    setCheck(false);
    setOpen(false);
    setSee(false);
    setChange(false);
  };
  const Check = () => {
    setCheck((prev) => !prev);
    setToggle(false);
    setOpen(false);
    setSee(false);
    setChange(false);
  };
  const Open = () => {
    setOpen((prev) => !prev);
    setToggle(false);
    setCheck(false);
    setSee(false);
    setChange(false);
  }
  const See = () => {
    setSee((prev) => !prev);
    setToggle(false);
    setOpen(false);
    setCheck(false);
    setChange(false);
  }
  const Change = () => {
    setChange((prev) => !prev);
    setCheck(false);
    setOpen(false);
    setSee(false);
    setToggle(false);
  }
  return (
    <div
      className="check"
      onClick={() => {
        props.hideDropDown();
        props.hide();
      }}
    >
      <div className="pricecheck">
        <div className="sectionone">
          <div className="min" onClick={Toggle}>
            <h3 className="garchig">Доод үнэ</h3>
            <img src="https://www.unegui.mn/static/images/dropdown_arrow.png" />
          </div>
          {toggle ? (
            <div className="test">
              {Price.map((item, index) => (
                <p className="subtext" key={index}>
                  {item.price}
                </p>
              ))}
            </div>
          ) : null}
          <div className="max" onClick={Check}>
            <h3 className="garchig">Дээд үнэ</h3>
            <img src="https://www.unegui.mn/static/images/dropdown_arrow.png" />
          </div>
          {check ? (
            <div className="test2">
              {Price.map((item, index) => (
                <p className="subtext2" key={index}>
                  {item.price}
                </p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="sectiontwo">
          <div className="worktime" onClick={Open}>
            <h3 className="garchig">Ажлын цаг</h3>
            <img src="https://www.unegui.mn/static/images/dropdown_arrow.png" />
          </div>
          {open ? (
            <div className="test3">
              <p className="subtext3">Бүтэн цагийн</p>
              <p className="subtext3">Хагас цагийн</p>
              <p className="subtext3">Цагийн</p>
              <p className="subtext3">Гэрээт</p>
              <p className="subtext3">Түр хугацааны</p>
            </div>
          ) : null}
          <div className="experience" onClick={See}>
            <h3 className="garchig">Туршлага</h3>
            <img src="https://www.unegui.mn/static/images/dropdown_arrow.png" />
          </div>
          {see ? (
            <div className="test4">
              <p className="subtext4">Шаардлагатай</p>
              <p className="subtext4">Шаардлагагүй</p>
            </div>
          ) : null}
        </div>
        <div className="sectionthree">
          <div className="level" onClick={Change}>
            <h3 className="garchig">Түвшин</h3>
            <img src="https://www.unegui.mn/static/images/dropdown_arrow.png" />
          </div>
          {change ? (
            <div className="test5">
              <p className="subtext5">Дадлагын</p>
              <p className="subtext5">Анхан шатны</p>
              <p className="subtext5">Мэргэжилтэн</p>
              <p className="subtext5">Дунд шатны удирдлага</p>
              <p className="subtext5">Дээд шатны удирдлага</p>
            </div>
          ) : null}
        </div>
        <div className="sectionfour"></div>
        <div className="sectionfive">
          <button className="buttonred">
            <img src="https://www.unegui.mn/static/images/search-submit-unegui.png" />
            Хайх
          </button>
        </div>
      </div>
    </div>
  );
};

export default Check;
