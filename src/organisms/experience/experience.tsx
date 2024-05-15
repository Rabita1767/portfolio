import Text from "../../atoms/text/text";
import monitor from "../../assets/images/Monitor-cuate.svg";
import Image from "../../atoms/image/image";
import experienceLottie from "../../assets/lotties/experience.json";
import Lottie from "lottie-react";
import "./experience.scss";
const Experience = () => {

    return (
        <div className="o-experience">
            <Text className="o-experience__heading" children="Experience" />
            <div className="o-experience__container">
                <div className="o-experience__container--left">
                    <Lottie animationData={experienceLottie} />
                </div>
                <div className="o-experience__container--right">
                    <div className="o-experience__container--right--sm">
                        <Text children="BJIT" className="o-experience__container--right--sm--heading" />
                        <Text children="Software Engineer" className="o-experience__container--right--sm--heading" />
                        <Text children="Jan 2024-Present" className="o-experience__container--right--sm--content" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;