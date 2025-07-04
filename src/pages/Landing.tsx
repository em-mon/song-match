import { motion } from "framer-motion";

export default function Landing() {

    const handleClick = () => {
        const client_id = "a5b2e7e7a6fd45468a8fd8a218e69fc0";
        const redirect_uri = "https://song-match-three.vercel.app/home";
        const scope = "user-library-read user-read-private";
        
        const auth_endpoint = "https://accounts.spotify.com/authorize";
        const auth_url = `${auth_endpoint}?client_id=${client_id}&response_type=token&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scope)}`;

        window.location.href = auth_url;
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