import Banner from "../organisms/banner/banner"
import BannerImage from "../organisms/bannerImage/bannerImage";
import Experience from "../organisms/experience/experience";
import { Skill } from "../organisms/skill/skill";
import Project from "../organisms/project/project";
import Contact from "../organisms/contact/contact";
import { Education } from "../organisms/education/education";
const Home = () => {
    return (
        <>
            <div>
                <Banner />

                <BannerImage />
                <Experience />

                <Skill />
                <Project />
                <Education />
                <Contact />
            </div>
        </>
    )
}

export default Home