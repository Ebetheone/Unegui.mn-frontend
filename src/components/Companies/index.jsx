import "./style.scss";
import Company from "../../data/Company.json";

const Companies = () => {
  return (
    <>
      <div className="companies">
        {Company.slice(0, 20).map((item, index) => (
          <div className="items" key={index}>
            <img src={item.img} alt="image" />
            <div className="block">
              <a href="" className="title">
                {item.name}
              </a>
              <p>{item.desc}</p>
              <span>{item.city}</span>
              <span>{item.number}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <div className="pages">
          <ul>
            <li>
              <a href="" className="c1">
                1
              </a>
            </li>
            <li>
              <a href="" className="c2">
                2
              </a>
            </li>
          </ul>
        </div>
        <a href="" className="next">
          Дараагийн зар &gt;&gt;
        </a>
      </div>
    </>
  );
};

export default Companies;
