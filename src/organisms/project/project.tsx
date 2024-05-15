import "./project.scss"
import Text from "../../atoms/text/text"
const Project = () => {
    return (
        <div className="o-project">
            <Text children="My Projects" className="o-experience__heading" />
            <div className="o-project__container">
                <div className="o-project__content">
                    <Text children="LearnWave-E-learning-platform" className="o-project__text" />
                    <Text children="A simple e-learning project with both admin and user side." className="o-project__subHeader" />
                    <div className="o-project__contentText">
                        <Text children="React JS" />
                        <Text children="Node JS" />
                        <Text children="MongoDB" />
                        <Text children="Tailwind CSS" />
                    </div>
                    <div className="o-project__contentTextBottom">
                        <Text children="Source Code" />
                        <Text children="Source Code" />
                    </div>
                </div>
                <div className="o-project__content">
                    <Text children="Online Book Store" className="o-project__text" />
                    <Text children="A simple e-learning project with both admin and user side." className="o-project__subHeader" />
                    <div className="o-project__contentText">
                        <Text children="React JS" />
                        <Text children="Node JS" />
                        <Text children="MongoDB" />
                        <Text children="Tailwind CSS" />
                    </div>
                    <div className="o-project__contentTextBottom">
                        <Text children="Source Code" />
                        <Text children="Source Code" />
                    </div>
                </div>
                <div className="o-project__content">
                    <Text children="Plasma Bank-Management System" className="o-project__text" />
                    <Text children="A simple e-learning project with both admin and user side." className="o-project__subHeader" />
                    <div className="o-project__contentText">
                        <Text children="React JS" />
                        <Text children="Node JS" />
                        <Text children="MongoDB" />
                        <Text children="Tailwind CSS" />
                    </div>
                    <div className="o-project__contentTextBottom">
                        <Text children="Source Code" />
                        <Text children="Source Code" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;