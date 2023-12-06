import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Animation = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    show: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={ isInView ? "show" : "hidden" }
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Animation;
