import "./style.scss";
import Menus from "../../data/Menus.json";

const PartnerMenu = () => {
  return (
    <div className="partnermenu">
      <div className="top">
        <h1>Unegui.mn харилцагчид</h1>
        <a href="" className="red">
          Шинэ дэлгүүр нээх
        </a>
      </div>
      <div className="bottom">
        {Menus.map((item, index) => (
          <div className="items">
            <p key={index}>{item.title}</p>
            <span>{item.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerMenu;
