import Banner from "../organisms/banner/banner"
import BannerImage from "../organisms/bannerImage/bannerImage";
import Experience from "../organisms/experience/experience";
import Skill from "../organisms/skill/skill";
import Project from "../organisms/project/project";
import Contact from "../organisms/contact/contact";
import Education from "../organisms/education/education";
import "./home.scss";
import { useEffect, useState } from "react";
const Home = () => {
    const [isDark, setIsDark] = useState(false);
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const handleDarkMode = () => {

        setIsDark(true);
    }
    const handleLightMode = () => {
        setIsDark(false);
    }
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            setPosX(e.clientX);
            setPosY(e.clientY);
        })

    }, []);


    return (
        <>

            <div className="o-home" dark-theme={isDark ? "dark" : ""}>
                <div className="cursor__dot" style={{ top: `${posY}px`, left: `${posX}px` }}></div >
                <div className="cursor__outline" style={{ top: `${posY}px`, left: `${posX}px` }}></div>
                <div className="light__effect" style={{ top: `${posY}px`, left: `${posX}px` }}></div>
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