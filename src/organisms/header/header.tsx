import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import Button from "../../atoms/button/button";
import "./header.scss";
import { FC } from "react";
import { useScrollToElement } from "../../hooks/useScrollTo";
interface IProps {
    onMenuClick: () => void
}
const Header: FC<IProps> = ({ onMenuClick }) => {
    const scrollToElement = useScrollToElement();

    const handleScroll = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            scrollToElement(element as HTMLElement);
        }
    };
    const scrollToContact = () => {
        handleScroll("o-contact__id");
    }

    return (
        <div className="o-header">
            <div className="o-header__left">
                <p>rabita</p>
            </div>
            <div className="o-header__right">
                <Button children="Say Hello" className="o-header__right--btn" type="submit" onClick={scrollToContact} />

                <FontAwesomeIcon icon={faBars} onClick={onMenuClick} />


            </div>
        </div>

    )
}

export default Header