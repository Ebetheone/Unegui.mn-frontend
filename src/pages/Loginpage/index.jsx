import "./style.scss";
import { useState } from "react";

const Loginpage = () => {
  const [phone, setPhone] = useState(0);
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(phone);
  };

  return (
    <div className="login">
      <div className="main">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title">Нэвтрэх</h1>
          <div className="inputs">
            <div className="top">
              <div className="text">Таны утасны дугаар</div>
              <div className="phone">
                <select>
                  <option label="+976" value="+976" selected="selected">
                    +976
                  </option>
                </select>
              </div>
              <div className="number">
                <input
                  type="text"
                  inputMode="text"
                  placeholder="____ ____"
                  onChange={handleChangePhone}
                />
              </div>
              <div className="desc">
                Та дугаараа +976 **** **** ийм хэлбэрт оруулна уу.
              </div>
            </div>
            <div className="bottom">
              <form className="check" onSubmit={handleSubmit}>
                <input type="checkbox" />
                <label htmlFor="confirm">
                  Би Unegui.mn сайтын үйлчилгээний нөхцөл, зар нийтлэх журмыг
                  хүлээн зөвшөөрч, мөн өөрийгөө 18 нас хүрсэн болохыг баталж
                  байна.
                </label>
              </form>
              <div className={phone.length > 0 ? "enable" : "warning"}>
                Эхлээд та үйлчилгээний нөхцөл зөвшөөрснөө чагтална уу
              </div>
              {phone.length > 0 ? (
                <button className="button">Мессежээр нэвтрэх</button>
              ) : (
                <button className="disable" disabled>
                  Мессежээр нэвтрэх
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
