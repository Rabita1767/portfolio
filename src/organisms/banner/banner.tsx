import "./banner.scss";
import BannerBottom from "../../molecules/bannerBottom/bannerBottom";
import React, { useState } from "react";
import Text from "../../atoms/text/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useScrollToElement } from "../../hooks/useScrollTo";
import Button from "../../atoms/button/button";
interface IProps {
    handleDarkModeClick: () => void;
    handleLightModeClick: () => void;
    isDark?: boolean;
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

    return (
        <>
            <div className="o-banner" >
                <div className="o-banner__header">
                    <div className="o-banner__headerLeft">
                        <p>rabita</p>
                    </div>
                    <div className="o-banner__headerRight">
                        <Button children="Say Hello" className="o-banner__right--btn" type="submit" onClick={scrollToContact} />

                        <FontAwesomeIcon icon={faBars} onClick={onMenuClickHandler} />

                    </div>
                    <BannerBottom handleDarkModeClick={handleDarkModeClick} handleLightModeClick={handleLightModeClick} isDark={isDark} />
                </div>
                <div className="o-banner__left"></div>
                <div className="o-banner__right"></div>

            </div>
            <div className={viewMenu === true ? `o-menu` : `o-menu-hidden`}>
                <div className="o-banner__cross" onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="o-banner__nav">

                    <Text className="o-banner__navItem" children="Home" onClick={() => window.location.href = "/"} />


                    <Text children="About Me" onClick={scrollToAbout} className="o-banner__navItem o-banner__about" />
                    <Text className="o-banner__navItem" children="Experience" onClick={scrollToExperience} />

                    <Text className="o-banner__navItem" children="Education" onClick={scrollToEducation} />

                    <Text className="o-banner__navItem" children="Contact" onClick={scrollToContact} />


                </div>
            </div>


        </>
    )
}

export default Banner;


