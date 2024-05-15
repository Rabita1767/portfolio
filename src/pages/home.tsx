import Banner from "../organisms/banner/banner"
import BannerImage from "../organisms/bannerImage/bannerImage";
import Experience from "../organisms/experience/experience";
import { Skill } from "../organisms/skill/skill";
import Project from "../organisms/project/project";
const Home = () => {
    return (
        <>
            <div>
                <Banner />

                <BannerImage />
                <Experience />

                <Skill />
                <Project />
            </div>
        </>
    )
}

export default Home