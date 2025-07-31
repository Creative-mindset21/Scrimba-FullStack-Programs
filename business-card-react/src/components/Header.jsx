import img from "../assets/img.png";
import { IoIosMailUnread } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <img src={img} alt="Profile Image" />

      <div className="texts">
        <h1>Laura Smith</h1>
        <small>Frontend Developer</small>
        <p>laurasmith.website</p>

        <div className="btns">
          <div className="btn">
            <IoIosMailUnread />
            <span>Email</span>
          </div>

          <div className="linkedin btn">
            <FaLinkedin />
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
