import "./style.scss";
import Sales from "../../data/Sales.json";
import { NavLink } from "react-router-dom";

const Same = () => {
  return (
    <div className='same'>
        <h2 className="title">Ижил зарууд</h2>
      <div className="things">
        {Sales.slice(0,12).map((item, index) => (
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
  )
}

export default Same