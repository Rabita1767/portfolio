import Text from "../../atoms/text/text";
import experienceLottie from "../../assets/lotties/experience.json";
import Lottie from "lottie-react";
import "./experience.scss";
import { motion } from "framer-motion";
const Experience = () => {
  const delay = 1;
  const duration = 1.8;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="o-experience"
      id="o-experience__id"
    >
      <Text className="o-experience__heading" children="Experience" />
      <div className="o-experience__container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: delay }}
          viewport={{ once: true }}
          className="o-experience__container--left"
        >
          <Lottie animationData={experienceLottie} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: duration, delay: delay }}
          viewport={{ once: true }}
          className="o-experience__container--right"
        >
          <div className="o-experience__container--right--sm">
            <Text
              children="BJIT"
              className="o-experience__container--right--sm--heading"
            />
            <Text
              children="Software Engineer"
              className="o-experience__container--right--sm--heading"
            />
            <Text
              children="August 2023-2025"
              className="o-experience__container--right--sm--content"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
