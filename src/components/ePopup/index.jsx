import "./style.scss";
import { NavLink } from "react-router-dom";

const Popup = (props) => {
  return (
    <div className="information">
      <div className="main">
        <a href="" className="title">
          Категори дахь бүх зарыг харах
          <span>
            {props.Menus.find((el) => el.id === props.activeId)?.number}
          </span>
        </a>
        <hr />
        <ul className="list">
          {props.Menus.find((el) => el.id === props.activeId)?.submenu?.map(
            (list, index) => (
              <NavLink
                exact
                key={index}
                to={"/filter"}
                style={{ textDecoration: "none" }}
              >
                <li>
                  <a href="">{list.title}</a>
                </li>
              </NavLink>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Popup;
