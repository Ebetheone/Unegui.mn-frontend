import "./style.scss";
import { NavLink } from "react-router-dom";

const Popup = (props) => {
  return (
    <>
    {
      props.drawRowIndex === props.rowIndex &&
      props.Menus.slice(props.rowIndex * 4, (props.rowIndex + 1) * 4).map((item, index) =>
      (
         <>
            {props.chosenOne === item?.id && <div className="information" key={index}>
            <div className="main">
                <a href="" className="title">
                Категори дахь бүх зарыг харах
                  <span>{item.number}</span>
                </a>
                <hr />
                  <ul className="list">
                {item.submenu.map((list, type) => (
                  <NavLink exact to={"/filter"} style={{textDecoration:"none"}}>
                    <li key={list}>
                      <a href="">{list.title}</a>
                    </li>
                    </NavLink>
                  ))}
                  </ul>
                </div>
        </div>
      }
         </>
      ))}
      </>
  );
};

export default Popup;
