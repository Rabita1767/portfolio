import "./bannerBottom.scss";
import Text from "../../atoms/text/text";
import { motion } from "framer-motion";
const BannerBottom = () => {
    const delay = 1;
    const duration = 0.85;
    return (
        <div className="o-banner-bottom">
            <motion.div animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: duration, delay: delay }}>
                <Text
                    children="Rabita Amin"
                    className="o-banner-bottom__upper-text"
                />

            </motion.div>
            <motion.div animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: duration, delay: delay }}>
                <Text
                    children={<span id="spin"></span>}
                    className="o-banner-bottom__mid-text"
                />

            </motion.div>
            <motion.div animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: duration, delay: delay }}>
                <Text
                    children="Software Engineer and a new IT gradute , having a strong foundation on the fundamentamentals of web development and apassion for creating user-friendly web-application"
                    className="o-banner-bottom__lower-text"
                />

            </motion.div>

        </div>
    )
}

export default BannerBottom;