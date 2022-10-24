import "./style.scss";
import Shadow from "../General/Shadow";
import Button from "../General/Button";

const Hamburger = (props) => {
  return (
    <div
      className="hamburger"
      style={{ left: props.showSidebar ? 0 : "-100vw" }}
    >
      {props.showSidebar && (
        <>
          <div className="ab">
            <div className="images">
              <p className="white">Миний зарууд </p>
              <p className="Transparent">Нэвтрэх ба бүртгэл</p>
              <p className="setting">Сайтын тохиргоо</p>
              <Button>Нэвтрэх</Button>
            </div>
          </div>
          <Shadow
            toggleSideBar={props.toggleSideBar}
            show={props.showSidebar}
          />
        </>
      )}
    </div>
  );
};

export default Hamburger;
