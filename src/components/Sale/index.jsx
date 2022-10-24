import "./style.scss";
import Sales from "../../data/Sales.json";
import { NavLink } from "react-router-dom";

const Sale = () => {
  return (
    <div className="sale">
      <h2 className="title">Шинэ зарууд</h2>
      <div className="things">
        {Sales.map((item, index) => (
          <NavLink exact to={"/buy"} className="link" key={index}>
          <div className="piece">
            <img src={item.img} alt="image" className="img" />
            <p className="desc">{item.desc}</p>
            <div className="price">{item.price}</div>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sale;
