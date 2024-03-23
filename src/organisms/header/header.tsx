import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import Button from "../../atoms/button/button";
import "./header.scss";
import { FC } from "react";
interface IProps {
    onMenuClick: () => void
}
const Header: FC<IProps> = ({ onMenuClick }) => {


    return (
        <div className="o-header">
            <div className="o-header__left">
                <p>rabita</p>
            </div>
            <div className="o-header__right">
                <Button children="Say Hello" className="o-header__right--btn" type="submit" />

                <FontAwesomeIcon icon={faBars} onClick={onMenuClick} />


            </div>
        </div>

    )
}

export default Header