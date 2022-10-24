import Menu from "../../components/Menu";
import SecondMenu from "../../components/eMenu";
import Ad from "../../components/Ad";
import Sale from "../../components/Sale";
import SearchBar from "../../components/SearchBar";
import Users from "../../components/Users";
import History from "../../components/History";

const Homepage = (props) => {
  return (
    <div>
      <SearchBar isOpen={props.isOpen} showDropDown={props.showDropDown} />
      <div onClick={props.hideDropDown}>
        <History />
        {/* <Menu /> */}
        <SecondMenu />
        <Ad />
        <Sale />
        <Users />
      </div>
    </div>
  );
};

export default Homepage;
