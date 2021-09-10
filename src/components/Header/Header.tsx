import { Link } from "react-router-dom";
import "./Card/CardData";
import Card from "./Card";
import "./Header.css";
import logo from "../logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="header-right">
        <div className="user-menu">
          <ul>
            <a href="" className="link">
              Sladjana Miljanovic
            </a>
            <a href="" className="link">
              Logout
            </a>
          </ul>
        </div>
        <div className="nav-div">
          {CardData.map((item, index) => {
            return (
              <ul key={index} className="nav-bar">
                <Link to={item.path}>
                  <Card data={item.title} />
                </Link>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
