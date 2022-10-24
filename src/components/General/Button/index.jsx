import "./style.scss";
import { NavLink } from "react-router-dom";

const Button = (props) => {
  return (
    <NavLink exact to={"/login"}>
      <button className="button">{props.children}</button>
    </NavLink>
  );
};

export default Button;
