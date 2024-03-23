import "./banner.scss";
import Header from "../header/header";
import BannerBottom from "../../molecules/bannerBottom/bannerBottom";
import { useState } from "react";
import Text from "../../atoms/text/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faDownload } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
    const [viewMenu, setViewMenu] = useState(false)
    const onMenuClickHandler = () => {
        setViewMenu(true)
    }
    return (
        <>

            <div className={viewMenu === true ? `o-banner-hidden` : `o-banner`}>
                <Header onMenuClick={onMenuClickHandler} />
                <div className="o-banner__left"></div>
                <div className="o-banner__right"></div>
                <BannerBottom />
                <div className="o-banner__text--div">
                    <Text
                        children="Hello..."
                        className="o-banner__text"
                    />
                </div>
                <div className="o-banner__icon">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faDownload} />
                    <FontAwesomeIcon icon={faAddressBook} />
                </div>
            </div>
            <div className={viewMenu === true ? `o-menu` : `o-menu-hidden`}>
                Hello
            </div>
        </>
    )
}

export default Banner