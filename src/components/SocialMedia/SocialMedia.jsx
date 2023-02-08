import React, { useContext } from "react";
import "./SocialMedia.css";
import github from "../../img/github.png";
import Twitter from "../../img/twitter.png";
import Linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Social = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="socialmedia" id="socialmedia">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            My Social Media Link
          </span>
          <span>Waiting For Your Massage</span>
          <span>
            Message me for any need.
            <br />
            I will reply to your message at my leisure in sha Allah.
            <br />
            Always say Alhamdullah.
            <br />
            Shahanuzzaman Rafi
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Mail Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 360 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle">
          <div className="w-secCircle">
            <a href="https://github.com/szrafi76" target="_blank">
              <img src={github} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://mobile.twitter.com/szrafi76/" target="_blank">
              <img src={Twitter} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a
              href="https://www.linkedin.com/in/shahanuzzaman-rafi-0662b925b/"
              target="_blank">
              <img src={Linkedin} alt="" />
            </a>
          </div>{" "}
          <div className="w-secCircle">
            <a href="https://www.instagram.com/s.z.rafi/" target="_blank">
              <img src={instagram} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
            <a href="https://www.facebook.com/szrafi" target="_blank">
              <img src={Facebook} alt="" />
            </a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};
export default Social;
