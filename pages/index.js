import { useEffect } from "react";

function Home() {

    useEffect(() => {
        document.body.style.margin = "0";
        document.body.style.padding = "0";
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0F0005",
            }}
        >
            <h1
                style={{
                    color: "#E59BB1",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.25)",
                    textAlign: "center",
                    fontSize: "2rem"
                }}
            >
                Ariany, eu amo você. Se você me ama, dá uma risadinha!
            </h1>
        </div>
    );
}

export default Home;
