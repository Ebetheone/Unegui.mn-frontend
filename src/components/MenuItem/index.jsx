import "./style.scss";

const MenuItem = (props) => {
  return (
    <div className="menuitem" onClick={props.click}>
      <div className="imgContainer">
        <img src={props.img} alt="img" className="img" />
      </div>
      <p className="para">{props.title}</p>
    </div>
  );
};

export default MenuItem;
