import "./style.scss";
import Sales from "../../data/Sales.json";
import Data from "../../data/MoreInformation.json";

const MobileItem = () => {
  return (
    <div className="MobileItem">
      <div className="flexbox">
        <div className="title">{Sales.slice(0, 1)[0].title}</div>
        <img src="/images/star.png" alt="start" />
      </div>
      <span className="price">{Sales.slice(0, 1)[0].price}</span>
      <img className="mainImg" src={Sales.slice(0, 1)[0].img} alt="mainImg" />
      <div className="date">
        {Sales.slice(0, 1)[0].date} Зар:{Sales.slice(0, 1)[0].id}
      </div>
      <div className="city">{Sales.slice(0, 1)[0].city}</div>
      <div className="desc">{Sales.slice(0, 1)[0].desc}</div>
      <div className="watch">{Sales.slice(0, 1)[0].watch}</div>
      <div className="use">{Sales.slice(0, 1)[0].use}</div>
      <div className="address">{Sales.slice(0, 1)[0].address}</div>
      <div className="name">{Data.slice(0, 1)[0].name}</div>
      <div className="phonenumber">{Data.slice(0, 1)[0].phonenumber}</div>
      <div className="deal">{Data.slice(0, 1)[0].deal}</div>
    </div>
  );
};

export default MobileItem;
