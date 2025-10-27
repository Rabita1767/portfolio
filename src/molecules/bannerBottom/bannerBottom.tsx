import "./bannerBottom.scss";
import Text from "../../atoms/text/text";
import { motion } from "framer-motion";
import Image from "../../atoms/image/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faCloudArrowDown,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Rabita from "../../assets/images/rabita.jpeg";
import React from "react";

interface IProps {
  isDark?: boolean;
  handleDarkModeClick: () => void;
  handleLightModeClick: () => void;
}
const BannerBottom: React.FC<IProps> = ({
  handleDarkModeClick,
  handleLightModeClick,
  isDark,
}) => {
  const delay = 1;
  const duration = 0.85;
  return (
    <div className="o-banner-bottom">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.4 }}
        className="o-banner-bottom__dark-icon"
      >
        {isDark && (
          <FontAwesomeIcon icon={faSun} onClick={handleLightModeClick} />
        )}
        {!isDark && (
          <FontAwesomeIcon icon={faMoon} onClick={handleDarkModeClick} />
        )}
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: duration, delay: delay }}
      >
        <Text children="Rabita Amin" className="o-banner-bottom__upper-text" />
      </motion.div>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -5 }}
        transition={{ duration: duration, delay: delay }}
      >
        <Text
          children={<span id="spin"></span>}
          className="o-banner-bottom__mid-text"
        />
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: duration, delay: delay }}
      >
        <Text
          children="Software Engineer and a new IT graduate , having a strong foundation on the fundamentals of web development and a passion for creating user-friendly web-application"
          className="o-banner-bottom__lower-text"
        />
      </motion.div>
      <div className="o-banner-bottom__container">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -5 }}
          transition={{ duration: duration, delay: delay }}
          className="o-banner__hello"
        >
          <Text children="Hello..." className="o-banner-bottom__text" />
        </motion.div>
        <div className="o-banner-bottom__container--image">
          <Image src={Rabita} className="o-banner-bottom__image" />
        </div>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 5 }}
          transition={{ duration: duration, delay: delay }}
          className="o-banner-bottom__icon"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.4 }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              onClick={() =>
                window.open("https://github.com/Rabita1767", "_blank")
              }
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.4 }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rabita-amin/",
                  "_blank"
                )
              }
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.4 }}
          >
            <FontAwesomeIcon
              icon={faAddressBook}
              onClick={() =>
                window.open("mailto:rabitaamin26@gmail.com", "_blank")
              }
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.4 }}
          >
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/15hEGRyBtSLtVE1m1U08a_x9IKaHZ6PaC/view?usp=sharing",
                  "_blank"
                )
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerBottom;
