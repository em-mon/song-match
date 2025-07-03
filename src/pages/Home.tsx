import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
        <div className="welcome">
            <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0 }}>
                WELCOME USER!
            </motion.h1>
        </div>
        <div className="main">
            <div className="first">
                <div className="numbers">
                    1
                </div>
            </div>
            <div className="second">
                <div className="numbers">
                    2
                </div>
            </div>
            <div className="third">
                <div className="numbers">
                    3
                </div>
            </div>
        </div>
    </div>
  );
}