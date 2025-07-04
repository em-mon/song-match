import { motion } from "framer-motion";
import arrow from '../media/arrow2.png'; 
import { useEffect, useState } from "react";

export default function Home() {
    const [token, setToken] = useState<string | null>(null);
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const code = query.get("code");

        const codeVerifier = localStorage.getItem("code_verifier");

        async function exchangeToken() {
            if (!code || !codeVerifier) return;

            const response = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    client_id: "a5b2e7e7a6fd45468a8fd8a218e69fc0",
                    grant_type: "authorization_code",
                    code,
                    redirect_uri: "https://song-match-three.vercel.app/home",
                    code_verifier: codeVerifier,
                }),
            });

            const data = await response.json();
            console.log("Token response:", data);

            if (data.access_token) {
                localStorage.setItem("spotify_token", data.access_token);
                setToken(data.access_token);

                // Clean up the URL
                const newUrl = new URL(window.location.href);
                newUrl.search = "";
                window.history.replaceState({}, document.title, newUrl.toString());
            }
        }

        const existingToken = localStorage.getItem("spotify_token");
        if (existingToken) {
            setToken(existingToken);
        } else {
            exchangeToken();
        }
    }, []);

    // Fetch user's display name from Spotify
    useEffect(() => {
        if (token) {
            fetch("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.display_name) {
                    setName(data.display_name.toUpperCase());
                }

                else {
                    setName("");
                }
            })
        }
    }, [token]);

    return (
    <div className="home">
        <div className="welcome">
            <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0 }}>
                  {`WELCOME${name ? ' ' + name : ''}!`}
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
        {token ? <p>Spotify Access Token: {token}</p> : <p>Loading...</p>}
    </div>
  );
}