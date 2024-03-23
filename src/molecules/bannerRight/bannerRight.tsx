import "./bannerRight.scss"
import Image from "../../atoms/image/image"
import Rabita from "../../assets/images/rabita.jpeg";
const BannerRight = () => (
    <div className="o-banner-right">
        <Image src={Rabita} className="o-banner-right__image" />
    </div>
)

export default BannerRight