import "./style.scss";
import Data from "../../data/MoreInformation.json";

const Sticky = () => {
  return (
    <div className="sticky">
      {Data.map((item, index) => (
        <div key={index}>
          <div className="partone">
            <div className="price">
              <img src="/images/price1.png" alt="shar" />
              <p className="word">{item.price} ₮</p>
            </div>
            <div className="phonenumber">
              <div className="bla">
                <p className="textone">Дугаар харах</p>
                <p className="texttwo">{item.phonenumber}</p>
              </div>
              <img src="/images/phone.png" alt="icon" />
            </div>
            <div className="announcement">
              <p className="announ">
                Луйвраас хэрхэн сэргийлэх талаар уншаарай. Зөвлөгөөг дагаж
                сэрэмжтэй байна уу.
              </p>
              <img src="/images/shield.svg" alt="icon" />
            </div>
          </div>
          <div className="parttwo">
            <div className="name">{item.name}</div>
            <p className="date">Элссэн огноо 2-р сар, 2017</p>
            <a href="" className="author">
              Зарын эзний бусад зарууд
            </a>
            <br />
            <a href="" className="complain">
              ГОМДОЛ
            </a>
            <div className="logo">
              <img src="/images/fb.png" alt="fb" />
              <p>Хуваалцах</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sticky;
