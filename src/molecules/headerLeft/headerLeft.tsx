import "./headerLeft.scss";
import Image from "../../atoms/image/image";
import Logo from "../../assets/images/logo/logo.png"
const HeaderLeft = () => {
    return (
        <div className="o-header-logo">
            <Image src={Logo} />
        </div>
    )
}

export default HeaderLeft