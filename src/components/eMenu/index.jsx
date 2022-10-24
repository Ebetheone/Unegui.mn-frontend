import "./style.scss";
import MenuItem from "../MenuItem";
import Menus from "../../data/Menus.json";
import { useState } from "react";
import Popup from "../ePopup";

const Menu = () => {
  const [activeId, setActiveId] = useState();
  return (
    <div className="menu">
      <div className="menuFirst">
        {Menus.slice(0, 4).map((item, index) => (
          <div key={index}>
            <MenuItem
              img={item.img}
              title={item.title}
              click={() => setActiveId(item.id)}
            />
          </div>
        ))}
      </div>
      {Menus.slice(0, 4).find((el) => el.id === activeId) && (
        <Popup activeId={activeId} Menus={Menus.slice(0, 4)} />
      )}
      <div className="menuFirst">
        {Menus.slice(4, 8).map((item, index) => (
          <div key={index}>
            <MenuItem
              img={item.img}
              title={item.title}
              click={() => setActiveId(item.id)}
            />
          </div>
        ))}
      </div>
      {Menus.slice(4, 8).find((el) => el.id === activeId) && (
        <Popup activeId={activeId} Menus={Menus.slice(4, 8)} />
      )}
      <div className="menuFirst">
        {Menus.slice(8, 12).map((item, index) => (
          <div key={index}>
            <MenuItem
              img={item.img}
              title={item.title}
              click={() => setActiveId(item.id)}
            />
          </div>
        ))}
      </div>
      {Menus.slice(8, 12).find((el) => el.id === activeId) && (
        <Popup activeId={activeId} Menus={Menus.slice(8, 12)} />
      )}
      <div className="menuFirst">
        {Menus.slice(12, 15).map((item, index) => (
          <div key={index}>
            <MenuItem
              img={item.img}
              title={item.title}
              click={() => setActiveId(item.id)}
            />
          </div>
        ))}
      </div>
      {Menus.slice(12, 15).find((el) => el.id === activeId) && (
        <Popup activeId={activeId} Menus={Menus.slice(12, 15)} />
      )}
    </div>
  );
};

export default Menu;
