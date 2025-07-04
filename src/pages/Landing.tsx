import { motion } from "framer-motion";
import { redirectToSpotifyAuthorize } from "../utils/spotifyAuth";

export default function Landing() {

    const handleClick = async () => {
        await redirectToSpotifyAuthorize();
    };
    
    return (
    <div className="landing">
        <div>
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0 }}>
                WANT TO KNOW<br />WHAT YOUR PHOTO<br />SOUNDS LIKE?
            </motion.h1>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2 }}>
                NOW YOU CAN WITH YOUR PICTURES, YOUR MOOD, AND YOUR MUSIC.
            </motion.h2>
        </div>
        <div className="getStarted">
            <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 3.5 }}
            onClick={handleClick}>
                Get started!
            </motion.button>
        </div>
    </div>
    );
}