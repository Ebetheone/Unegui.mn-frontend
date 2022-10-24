import "./style.scss";
import History from "../../data/History.json";
import { NavLink } from "react-router-dom";

const HistoryTables = () => {
  return (
    <div className="history">
      <h5 className="title">Сүүлийн хайлтууд</h5>
      <div className="box">
        {History.map((item, index) => (
          <NavLink to={"/"} style={{ textDecoration: "none" }} key={index}>
            <div className="boxitem">
              <div className="flex">
                <img src={item.img} alt="image" />
                <p className="item">{item.item} {item.price} {item.city}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HistoryTables;
