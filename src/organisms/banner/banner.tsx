import "./banner.scss";
import Header from "../header/header";
import BannerBottom from "../../molecules/bannerBottom/bannerBottom";
import React, { useEffect, useRef, useState } from "react";
import Text from "../../atoms/text/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faDownload, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "../../atoms/image/image";
import Rabita from "../../assets/images/rabita.jpeg";
import { motion } from "framer-motion";
import { useScrollToElement } from "../../hooks/useScrollTo";
interface IProps {
    isDark?: boolean;
    handleDarkModeClick: () => void;
    handleLightModeClick: () => void;
}

const Banner: React.FC<IProps> = ({ handleDarkModeClick, handleLightModeClick, isDark }) => {
    const [viewMenu, setViewMenu] = useState(false);
    const onMenuClickHandler = () => {
        setViewMenu(true)
    }
    const handleClose = () => {
        setViewMenu(false);
    }
    const scrollToElement = useScrollToElement();

    const handleScroll = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            scrollToElement(element as HTMLElement);
        }
    };
    const scrollToAbout = () => {
        handleScroll("o-intro__id");
        setViewMenu(false);

    }
    const scrollToEducation = () => {
        handleScroll("o-education__id");
        setViewMenu(false);
    }
    const scrollToContact = () => {
        handleScroll("o-contact__id");
        setViewMenu(false);
    }
    const scrollToExperience = () => {
        handleScroll("o-experience__id");
        setViewMenu(false);
    }
    const delay = 1;
    const duration = 0.85;

    return (
        <>
            <div className="o-banner" >
                <Header onMenuClick={onMenuClickHandler} />
                <div className="o-banner__left"></div>
                <div className="o-banner__right"></div>
                <BannerBottom />


            </div>
            <div className={viewMenu === true ? `o-menu` : `o-menu-hidden`}>
                <div className="o-banner__cross" onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="o-banner__nav">
                    <Text children="Home" onClick={() => window.location.href = "/"} />
                    <Text children="About Me" onClick={scrollToAbout} />
                    <Text children="Experience" onClick={scrollToExperience} />
                    <Text children="Education" onClick={scrollToEducation} />
                    <Text children="Contact" onClick={scrollToContact} />

                </div>
            </div>
            <div
                className="o-banner-bottom__container">
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: duration, delay: delay }}
                    className="o-banner__hello">
                    <Text
                        children="Hello..."
                        className="o-banner-bottom__text"
                    />

                </motion.div>
                <div className="o-banner-bottom__container--image">
                    <Image src={Rabita} className="o-banner-bottom__image" />
                </div>
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    transition={{ duration: duration, delay: delay }}
                    className="o-banner-bottom__icon">
                    <FontAwesomeIcon icon={faGithub} onClick={() => window.open("https://github.com/Rabita1767", "_blank")}
                    />
                    <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open("https://www.linkedin.com/in/rabita-amin/", "_blank")}
                    />
                    <FontAwesomeIcon icon={faAddressBook} onClick={() => window.open("mailto:rabitaamin015@gmail.com", "_blank")} />

                    {isDark && <FontAwesomeIcon icon={faSun} onClick={handleLightModeClick} />}
                    {!isDark && <FontAwesomeIcon icon={faMoon} onClick={handleDarkModeClick} />}

                </motion.div>
            </div>

        </>
    )
}

export default Banner