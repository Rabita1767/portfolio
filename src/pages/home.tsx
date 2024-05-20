import Banner from "../organisms/banner/banner"
import BannerImage from "../organisms/bannerImage/bannerImage";
import Experience from "../organisms/experience/experience";
import { Skill } from "../organisms/skill/skill";
import Project from "../organisms/project/project";
import Contact from "../organisms/contact/contact";
import { Education } from "../organisms/education/education";
import "./home.scss";
import { useState } from "react";
const Home = () => {
    const [isDark, setIsDark] = useState(false);
    const handleDarkMode = () => {

        setIsDark(true);
    }
    const handleLightMode = () => {
        setIsDark(false);
    }

    return (
        <>
            <div className="o-home" dark-theme={isDark ? "dark" : ""}>
                <div className="o-home__flex" >
                    <Banner handleDarkModeClick={handleDarkMode} handleLightModeClick={handleLightMode} isDark={isDark} />
                    <BannerImage />
                </div>
                <div>
                    <Experience />
                    <Skill />
                    <Project />
                    <Education />
                    <Contact />

                </div>
            </div>
        </>
    )
}

export default Home