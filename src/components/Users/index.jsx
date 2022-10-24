import "./style.scss";
import { NavLink } from "react-router-dom";

const Users = () => {
  return (
    <div className="users">
      <div className="title">Бүх зарууд</div>
      <hr className="line" />
      <div className="weird">
        <div className="store">
          <h2>Unegui.mn харилцагчид</h2>
          <NavLink to={"partner"}>Бүгдийг харах</NavLink>
        </div>
        <ul className="list">
          <li className="ac">
            <img src="/images/dreamhouse.jpg" alt="" />
            <div className="min">
              <a href="">Dream house</a>
              <p>5 зар</p>
            </div>
          </li>
          <li className="ac">
            <img src="/images/gunee.jpg" alt="" />
            <div className="min">
              <a href="">Үл хөдлөх хөрөнгийн мэргэжилтэн Г.Гүнбадрах</a>
              <p>28 зар</p>
            </div>
          </li>
          <li className="ac">
            <img src="/images/like.jpg" alt="" />
            <div className="min">
              <a href="">Heregtseet baraa uilchilgee</a>
              <p>29 зар</p>
            </div>
          </li>
        </ul>
      </div>
      <hr className="line" />
      <div className="read">
        <h2>Хэрэглэгчдийн амжилтын талаар уншина уу</h2>
        <ul>
          <li className="ebu">
            <div className="all">
              <div className="first">
                <img src="/images/user.png" alt="user" />
                nymgarig
              </div>
              <div className="second">
                Hurdan zaragdsan shvv tanai zariin sited bayarlalaa
              </div>
            </div>
          </li>
          <li>
            <div className="all">
              <div className="first">
                <img src="/images/user.png" alt="user" />
                shiree sandal
              </div>
              <div className="second">Mash hurdan zaragdsan bayrlalaa</div>
            </div>
          </li>
          <li className="abu">
            <div className="all">
              <div className="first">
                <img src="/images/user.png" alt="user" />
                Зулаа
              </div>
              <div className="second">
                Hurdan shuurhai holbogdson tanai site.n hamt olood mash ih
                bayrlalaa
              </div>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div className="top">
        <div className="text">
          <div className="textone">
            <h3>Эрэлттэй хайлтууд</h3>
            <a href="">ajiliin zar</a>
            <a href="">avto zar</a>
            <a href="">Автомашин зарна</a>
            <a href="">Toyota Prius zarna</a>
            <a href="">2 өрөө байр</a>
            <a href="">Ажилд авна</a>
            <a href="">IPhone zarna</a>
            <a href="">Notebook</a>
            <a href="">Гадуур хувцас</a>
          </div>
          <hr />
          <p>
            Монголын номер нэг худалдааны сайт Үнэгүй.мн-д тавтай морилно уу. Та
            манай цахим хуудсаар дамжуулан худалдааны бүх төрлийн салбарт онлайн
            хэлбэрээр үйлчлүүлэх боломжтой. Бид таны цаг завыг хэмнэн нэг дор
            бүх төрлийн олон мянган зарыг нэгтгэсэн цогц зарын мэдээллийг хүргэж
            байна. Үнэгүй.мн сайтны тусламжтайгаар та хүссэн бараа
            бүтээгдэхүүнээ худалдаалж, худалдан авахаас гадна, ажлын байрны зар
            хайх, ажлын байрны зар зарлах, автомашин, авто техникийн бүх төрлийн
            машин авна, машин зарна, машинаар солино гэх мэт автозарыг хайх,
            зарлуулах боломжтой. Мөн түүнчлэн үл хөдлөх зарна, үл хөдлөх солино,
            үл хөдлөх түрээслэнэ, үл хөдлөх авна гэсэн зарын мэдээллийг авч,
            өгөх боломжтой. Үүнээс гадна үнэгүй мн зарын сайтны тусламжтайгаар
            бүх төрлийн үйлчилгээний зарын мэдээллийг авч, сайтаар зарлуулах
            боломжтой.
          </p>
          <p>
            Монголдоо номер нэг худалдааны зарын сайт. Бид та бүхний зарыг
            өөрсдийн цахим хуудсаараа дамжуулан түргэн шуурхай түмэнд түгээх
            болно.
          </p>
          <p>
            Та бүхэн бусдын болоод өөрийн цаг завыг хүндэлж үнэн бодитой зарын
            мэдээллийг бидэнд өгнө үү. Баярлалаа, таныг хүндэтгэсэн Монголын
            номер нэг худалдааны сайт Үнэгүй.мн
          </p>
        </div>
        <div className="links">
          <img src="/images/linkedin.png" alt="logo" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
