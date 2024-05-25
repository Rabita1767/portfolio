import "./education.scss";
import Text from "../../atoms/text/text";
import { motion } from "framer-motion";
const Education = () => {
    const delay = 0.5;
    const duration = 1.8;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: duration, delay: delay }}
            viewport={{ once: true }}
            className="o-education" id="o-education__id">
            <Text children="Education" className="o-experience__heading" />
            <div className="o-education__container">
                <div className="o-education__containerRight">
                    <div className="o-education__contentRight">
                        <Text children="Jahangirnagar University" className="o-project__text" />
                        <Text children="B.SC in Information Technology" className="o-project__subHeader" />
                        <Text children="Feb,18-May,23" />
                    </div>
                    <div className="o-education__contentRight">
                        <Text children="Birshrestha Noor Mohammad Public College" className="o-project__text" />
                        <Text children="Higher Secondary School Certificate" className="o-project__subHeader" />
                        <Text children="June,15-June,16" />
                    </div>

                </div>
            </div>
        </motion.div>
    )
}
export default Education;