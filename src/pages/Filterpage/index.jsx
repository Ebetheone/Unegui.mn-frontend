import Filter from "../../components/Filter";
import Type from "../../components/Type";
import MainFilter from "../../components/MainFilter";
import Informations from "../../components/Informations";
import Check from "../../components/Check";

const Filterpage = (props) => {
  return (
    <div>
      <Filter
        isOpen={props.isOpen}
        showDropDown={props.showDropDown}
        open={props.open}
        show={props.show}
        hide={props.hide}
        hideDropDown={props.hideDropDown}
      />
      <Check hide={props.hide} hideDropDown={props.hideDropDown} />
      <Type
        reveal={props.reveal}
        yesreveal={props.yesreveal}
        noreveal={props.noreveal}
        hide={props.hide}
        hideDropDown={props.hideDropDown}
      />
      <MainFilter hide={props.hide} hideDropDown={props.hideDropDown} />
      <Informations hide={props.hide} hideDropDown={props.hideDropDown} />
    </div>
  );
};

export default Filterpage;
