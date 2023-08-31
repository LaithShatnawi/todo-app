import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="tabContain">
          <Link to="/" >
            <button className="homeTab">Home</button>
          </Link>
          <Link to="/settings" >
          <button className="settingsTab">Settings</button>
          </Link>
        </div>
        <h1 className="title">
          <div className="logo">
            <b>
              T<span>oD</span>o <span>L</span>ist
            </b>
          </div>
        </h1>
      </div>
    </>
  );
};

export default Header;
