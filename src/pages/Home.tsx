import { motion } from "framer-motion";
import arrow from '../media/arrow2.png'; 

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
                <h2>
                    Choose a picture to upload:
                </h2>
                <button>
                    UPLOAD
                </button>
            </div>
            <div className="second">
                <div className="numbers">
                    2
                </div>
                <h2>
                    Get songs that match the chosen image:
                </h2>
                <button>
                    START MATCHING
                </button>
            </div>
            <div className="third">
                <div className="numbers">
                    3
                </div>
                <h2>
                    See which songs matched below:
                </h2>
                <a href="#res">
                    <img src={arrow} alt="arrow"></img>
                </a>
            </div>
        </div>
        <div id="res" className="workArea">
            <div className="imageDrop">

            </div>
            <div className="results">

            </div>
        </div>
    </div>
  );
}