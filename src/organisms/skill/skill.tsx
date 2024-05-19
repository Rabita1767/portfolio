import Text from "../../atoms/text/text";
import html from "../../assets/lotties/html.json";
import css from "../../assets/lotties/css.json";
import js from "../../assets/lotties/js.json";
import Lottie from "lottie-react";
import ts from "../../assets/images/logo/ts.png";
import express from "../../assets/images/logo/express.png";
import "./skill.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faGitAlt, faNode, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import Image from "../../atoms/image/image";
import { faDatabase, faFileCode, faServer } from "@fortawesome/free-solid-svg-icons";
export const Skill = () => (
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
                    <FontAwesomeIcon icon={faReact} />
                </div>
                <Text children="ReactJS" className="o-skill__text" />
            </div>
            <div className="o-skill__content">
                <div className="o-skill__lottie">
                    <FontAwesomeIcon icon={faNode} />
                </div>
                <Text children="NodeJS" className="o-skill__text" />
            </div>
            <div className="o-skill__content">
                <div className="o-skill__lottie">
                    <Image src={express} className="o-skill__img" />
                </div>
                <Text children="ExpressJS" className="o-skill__text" />
            </div>
            <div className="o-skill__content">
                <div className="o-skill__lottie">
                    <Image src={ts} className="o-skill__img" />
                </div>
                <Text children="TypeScript" className="o-skill__text" />
            </div>
            <div className="o-skill__content">
                <div className="o-skill__lottie">
                    <FontAwesomeIcon icon={faSass} />
                </div>
                <Text children="Sass" className="o-skill__text" />
            </div>
            <div className="o-skill__content">
                <div className="o-skill__lottie">
                    <FontAwesomeIcon icon={faDatabase} />
                </div>
                <Text children="MongoDB" className="o-skill__text" />
            </div>
            <div className="o-skill__content">
                <div className="o-skill__lottie">
                    <FontAwesomeIcon icon={faServer} />
                </div>
                <Text children="MySql" className="o-skill__text" />
            </div>
            <div className="o-skill__content">
                <div className="o-skill__lottie">
                    <FontAwesomeIcon icon={faFileCode} />
                </div>
                <Text children="Tailwind css" className="o-skill__text" />
            </div>
            <div className="o-skill__content">
                <div className="o-skill__lottie">
                    <FontAwesomeIcon icon={faBootstrap} />
                </div>
                <Text children="Bootstrap" className="o-skill__text" />
            </div>
            <div className="o-skill__content">
                <div className="o-skill__lottie">
                    <FontAwesomeIcon icon={faGitAlt} />
                </div>
                <Text children="Git" className="o-skill__text" />
            </div>
        </div>
    </div>
)
