import "./style.scss";

const Shadow = props => {
  return props.show ? (
    <div onClick={props.toggleSideBar} className="Shadow"></div>
  ) : null;
};

export default Shadow;
