import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import About from "../organisms/about/about"
import Banner from "../organisms/banner/banner"
import Header from "../organisms/header/header"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import BannerImage from "../organisms/bannerImage/bannerImage";

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerImage />
        </div>
    )
}

export default Home