import "./style.scss";
import Button from "../General/Button";
import { NavLink } from "react-router-dom";

export default function News() {
  return (
    <div className="news">
      <div className="container">
        <div className="top">
          <img className="logo" src="/images/unegui.png" alt="logo" />
          <div className="sociallogo">
            <img src="/images/facebook.png" alt="facebook" />
            <img src="/images/linkedin.png" alt="linkedin" />
          </div>
          <div className="button">
            <Button>Зар нэмэх</Button>
          </div>
          <div className="apple">
            <img src="/images/googleplay.png" alt="google" />
            <img src="/images/apple.png" alt="apple" />
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="first">
            <NavLink to={"mobile"} style={{ textDecoration: "none" }}>
              <span>Гар утасны хувилбар</span>
            </NavLink>
            <a href="">Санал хүсэлт, сэтгэгдэл</a>
            <a href="">Сайтын бүтэц</a>
            <a href="">Байршлууд</a>
            <a href="">Үйлчилгээний нөхцөл</a>
          </div>
          <div className="second">
            <a className="bla" href="">
              Лицензийн гэрээ, License agreement
            </a>
            <a href="">Баннер байршуулах</a>
            <a href="">Тусламж</a>
            <a href="">Аюулгүй ажиллагаа</a>
          </div>
          <img src="/images/mobile.png" alt="phone" />
          <div className="third">
            <h2>Үнэгүй.мн апп суулгах</h2>
            <p>Холбоосыг мессежээр авах</p>
            <form>
              <input
                type="text"
                inputMode="text"
                placeholder="+976   __ ___ ___"
              />
              <button>‣</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
