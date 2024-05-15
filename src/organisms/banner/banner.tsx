import "./banner.scss";
import Header from "../header/header";
import BannerBottom from "../../molecules/bannerBottom/bannerBottom";
import { useState } from "react";
import Text from "../../atoms/text/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faDownload, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "../../atoms/image/image";
import Rabita from "../../assets/images/rabita.jpeg"
const Banner = () => {
    const [viewMenu, setViewMenu] = useState(false)
    const onMenuClickHandler = () => {
        setViewMenu(true)
    }
    const handleClose = () => {
        setViewMenu(false);
    }
    return (
        <>

            <div className="o-banner">
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
                    <Text children="Home" />
                    <Text children="About Me" />
                    <Text children="Experience" />
                    <Text children="Education" />
                    <Text children="Contact" />

                </div>
            </div>
            <div className="o-banner-bottom__container">
                <div className="o-banner__hello">
                    <Text
                        children="Hello..."
                        className="o-banner-bottom__text"
                    />

                </div>
                <div className="o-banner-bottom__container--image">
                    <Image src={Rabita} className="o-banner-bottom__image" />
                </div>
                <div className="o-banner-bottom__icon">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faDownload} />
                    <FontAwesomeIcon icon={faAddressBook} />
                </div>
            </div>
        </>
    )
}

export default Banner