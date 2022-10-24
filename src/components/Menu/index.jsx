import "./style.scss";
import MenuItem from "../MenuItem";
import Menus from "../../data/Menus.json";
import { useState } from "react";
import Popup from "../../components/popup";

const Menu = () => {
  const [rowIndex, setRowIndex] = useState();
  const [colIndex, setColIndex] = useState();
  const [chosenOne, setChosenOne] = useState();
  return (
    <div className="menu">
      {Array.from({length: 4}).map((_,rowsIndex) => (
        <>
          <div className="menuFirst">
            {Array.from({length: 4}).map((_, colsIndex) => (
              <>
              {Menus[rowsIndex * 4 + colsIndex]?.id ? 
              <div key={Menus[rowsIndex * 4 + colsIndex]?.id}>
                <MenuItem img={Menus[rowsIndex * 4 + colsIndex]?.img} title={Menus[rowsIndex * 4 + colsIndex]?.title}
                click={() => {setRowIndex(rowsIndex); setColIndex(colsIndex); setChosenOne(Menus[rowsIndex * 4 + colsIndex]?.id)}}/>
              </div>
              : null}
              </>
            ))}
          </div>
          <Popup rowIndex={rowIndex} Menus={Menus} colIndex={colIndex} drawRowIndex={rowsIndex} chosenOne={chosenOne}/>
        </>
      ))}
    </div>
  );
};

export default Menu;
