import Text from "../../atoms/text/text";
import "./skill.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "../../atoms/image/image";
import skillData from "../../data/skill.json";
const Skill = () => {
    const delay = 0.5;
    const duration = 1.8;
    const scrollRef = useRef(null);
    return (
        <div ref={scrollRef}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: duration, delay: delay }}
                viewport={{ once: true }}
                className="o-skill">
                <Text children="My Skills" className="o-experience__heading" />
                <div className="o-skill__container">
                    {skillData.map((item) => (
                        <motion.div
                            initial={{ y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="o-skill__content">
                            <div className="o-skill__lottie">
                                <Image src={item?.link} className="o-skill__img" />
                            </div>
                            <Text children={item?.text} className="o-skill__text" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>
    )
}
export default Skill;
