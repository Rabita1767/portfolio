import Banner from "../organisms/banner/banner"
import BannerImage from "../organisms/bannerImage/bannerImage";
import Experience from "../organisms/experience/experience";
import { Skill } from "../organisms/skill/skill";
const Home = () => {
    return (
        <>
            <div>
                <Banner />
                <BannerImage />
                <Experience />
                <Skill />
            </div>
        </>
    )
}

export default Home