import "./style.scss";
import Data from "../../data/States.json";
import Menus from "../../data/Menus.json";
import { useState } from "react";

const Filter = (props) => {
  const [mouse, setMouse] = useState(false);
  const mouseOn = () => {
    setMouse(true);
  };
  const mouseLeave = () => {
    setTimeout(() => {
      setMouse(false);
    }, 2000);
  };
  return (
    <section id="upper">
      <div className="SearchBar">
        <div className="Content">
          <div className="Search">
            <input
              className="Input"
              type="text"
              placeholder="109,203 Зар байна"
            />
            <div
              className="Text"
              onClick={() => {
                props.showDropDown();
                props.hide();
              }}
            >
              <p>
                Бүх байршил
                <img src="https://www.unegui.mn/static/images/dropdown_arrow.png" />
              </p>
              <div>
                {props.isOpen ? (
                  <div className="test">
                    {Data.map((item, index) => (
                      <p key={index}>{item.state}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="searchTwo">
            <div
              className="TextOne"
              onClick={() => {
                props.show();
                props.hideDropDown();
              }}
            >
              <img
                className="itemImage"
                src="https://cdn.unegui.mn/media/style.png"
                alt="image"
              />
              <p className="bula">
                Хувцас хэрэглэл
                <img src="https://www.unegui.mn/static/images/dropdown_arrow.png" />
              </p>
              <div>
                {props.open ? (
                  <div className="test">
                    {Menus.map((item, index) => (
                      <>
                        <div
                          className="flexbox"
                          key={index}
                          onMouseEnter={mouseOn}
                          onMouseLeave={mouseLeave}
                        >
                          <img
                            className="itemImage"
                            src={item.img}
                            alt="image"
                          />
                          <p className="subtext">{item.title}</p>
                          <span>{item.number}</span>
                        </div>
                        {/* {mouse && (
                          <div className="submenu">
                            {item.submenu.map((list, type) => (
                              <div className="submenus" key={type}>
                                <p className="submenutext">{list.title}</p>
                                <span className="submenunumber">
                                  {item.number}
                                </span>
                              </div>
                            ))}
                          </div>
                        )} */}
                      </>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
