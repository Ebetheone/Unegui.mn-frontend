import React from "react";
import "./style.scss";

const AddAd = () => {
  return (
    <div className="AddAd">
      <h1 className="title">Зар нэмэх</h1>
      <div className="line"></div>
      <p className="">Категорио сонгоно уу</p>
      <div className="grid_3fr">
        {Data.map((item) => (
          <div key={item.id}>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        ))}
      </div>
      <div className="warning">
        Ижил зар оруулахыг хориглоно. Хэрвээ Та ижил зар өмнө нь оруулсан бол
        сайтны дээд хэсэгт байрлах «Миний зарууд»-аас харна уу.
      </div>
    </div>
  );
};

export default AddAd;
