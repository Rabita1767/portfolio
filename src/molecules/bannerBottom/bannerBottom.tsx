import "./bannerBottom.scss";
import Text from "../../atoms/text/text";
import Image from "../../atoms/image/image"
import Rabita from "../../assets/images/rabita.jpeg";
const BannerBottom = () => {
    return (
        <div className="o-banner-bottom">
            <Text
                children="Rabita Amin"
                className="o-banner-bottom__upper-text"
            />
            <Text
                children="Frontend Developer |"
                className="o-banner-bottom__mid-text"
            />
            <Text
                children="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, deserunt itaque similique odit reprehenderit quod! Consectetur dolore optio at quo incidunt, illo dicta commodi minima aliquam esse consequuntur porro dignissimos."
                className="o-banner-bottom__lower-text"
            />
            <div>
                <Image src={Rabita} className="o-banner-bottom__image" />
            </div>
        </div>
    )
}

export default BannerBottom;