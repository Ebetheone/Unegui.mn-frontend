import Data from "../../data/Sales.json"
import "./style.scss";
import { NavLink } from "react-router-dom";

const Advertisment = () => {
  return (
      <div className='advertisment'>
        {Data.slice(0,1).map((item, index) => (
            <div key={index}>
            <div className="header">
                <h1 className="title">{item.title}</h1>
                <div className="bottom">
                    <div className="block">
                    <a href="/" className="city">{item.city}</a>
                    <div className="detail">
                        <span className="date">Нийтэлсэн: {item.date}</span>
                        <span className="desc">
                            Зарын дугаар: 
                        <span className="id">{item.id}</span>
                        </span>
                    </div>
                    </div>
                    <div className="icon">
                        <img src="/images/star.png" alt="image"/>
                    </div>
                </div>
            </div>
            <div className="main">
                <img src={item.img} alt="image"/>
            </div>
            <div className="footer">
                <ul className="informations">
                    <li>
                        <span>Хаяг байршил:</span>
                        <span className="address">{item.address}</span>
                    </li>
                    <li>
                        <span>Шинэ / Хуучин:</span>
                        <span className="address">{item.use}</span>
                    </li>
                </ul>
                <div className="desc">
                    <p>{item.desc}</p>
                </div>
                <div className="back">
                    <NavLink to={"/"}>Буцах</NavLink>
                    <span>Үзсэн : {item.watch}</span>
                </div>
            </div>
            </div>
        ))}
    </div>
  )
}

export default Advertisment