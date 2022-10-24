import "./style.scss";
import Data from "../../data/zar.json";

const MainFilter = (props) => {
  return (
    <div className="mainfilter" onClick={() => {props.hideDropDown(); props.hide();}}>
      {Data.slice(0,1).map((item, index) => (
        <>
          <div className="title" key={index}>
            {item.title}
          </div>
            <div className="submenu">
          {item.subtitle.map((list, type) => (
              <a href="" className="submenus" key={type}>
                {list.title}
              <span>{list.views}</span>
              </a>
          ))}
            </div>
        </>
      ))}
      <hr />
    </div>
  );
};

export default MainFilter;
