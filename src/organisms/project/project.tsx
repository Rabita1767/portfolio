import "./project.scss"
import Text from "../../atoms/text/text";
import { motion } from "framer-motion";
import projectData from "../../data/project.json";
import { Link } from "react-router-dom";
const Project = () => {
    const delay = 0.5;
    const duration = 1.8;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: duration, delay: delay }}
            viewport={{ once: true }}
            className="o-project">
            <Text children="My Projects" className="o-experience__heading" />
            <div className="o-project__container">
                {projectData.map((item) => (
                    <motion.div
                        initial={{ y: 0 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="o-project__content">
                        <Text children={item.title} className="o-project__text" />
                        <Text children={item.content} className="o-project__subHeader" />
                        <div className="o-project__contentText">
                            {
                                item.technology.map((tech) => (
                                    <Text children={tech} />

                                ))
                            }
                        </div>
                        <div className="o-project__contentTextBottom">
                            <Text children="Source Code" />
                            {item.link == "" ? (
                                <Text children="Unavailable" />
                            ) :
                                <Link to={item.link} target="_blank">Click Here</Link>
                            }
                        </div>
                    </motion.div>

                ))}
            </div>
        </motion.div>
    )
}

export default Project;