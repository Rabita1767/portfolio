import Text from "../../atoms/text/text";
import html from "../../assets/lotties/html.json";
import css from "../../assets/lotties/css.json";
import js from "../../assets/lotties/js.json";
import Lottie from "lottie-react";
import "./skill.scss";
export const Skill = () => {
    return (
        <div className="o-skill">
            <Text children="My Skills" className="o-experience__heading" />
            <div className="o-skill__container">
                <div className="o-skill__content">
                    <div className="o-skill__lottie">
                        <Lottie animationData={html} />
                    </div>
                    <Text children="HTML" className="o-skill__text" />
                </div>
                <div className="o-skill__content">
                    <div className="o-skill__lottie">
                        <Lottie animationData={css} />
                    </div>
                    <Text children="CSS" className="o-skill__text" />
                </div>
                <div className="o-skill__content">
                    <div className="o-skill__lottie">
                        <Lottie animationData={js} />
                    </div>
                    <Text children="JavaScript" className="o-skill__text" />
                </div>
                <div className="o-skill__content">
                    <div className="o-skill__lottie">
                        <Lottie animationData={js} />
                    </div>
                    <Text children="ReactJS" className="o-skill__text" />
                </div>
                <div className="o-skill__content">
                    <div className="o-skill__lottie">
                        <Lottie animationData={js} />
                    </div>
                    <Text children="NodeJS" className="o-skill__text" />
                </div>
                <div className="o-skill__content">
                    <div className="o-skill__lottie">
                        <Lottie animationData={js} />
                    </div>
                    <Text children="ExpressJS" className="o-skill__text" />
                </div>
                <div className="o-skill__content">
                    <div className="o-skill__lottie">
                        <Lottie animationData={js} />
                    </div>
                    <Text children="Sass" className="o-skill__text" />
                </div>
                <div className="o-skill__content">
                    <div className="o-skill__lottie">
                        <Lottie animationData={js} />
                    </div>
                    <Text children="MongoDB" className="o-skill__text" />
                </div>
            </div>
        </div>
    )
}
