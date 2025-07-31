import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="#">
            <FaTwitterSquare />
          </a>
        </li>

        <li>
          <a href="#">
            <FaFacebookSquare />
          </a>
        </li>

        <li>
          <a href="#">
            <FaInstagramSquare />
          </a>
        </li>

        <li>
          <a href="#">
            <FaGithubSquare />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
