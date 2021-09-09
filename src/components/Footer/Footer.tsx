import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-div">
        <ul className="left">
          <li>
            <span>Copyright @ 2013. VegaITSourcing All rights reserved</span>
          </li>
        </ul>
        <ul className="right">
          <li>
            <a>Terms of service</a>
          </li>
          <li>
            <a>Privacy policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
