import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import MainCard from "./MainCard.jsx";
import { Outlet } from "react-router-dom";
import DownloderCard from "./DownloderCard.jsx";
import { UrlContext } from "../../contexts/UrlContext.jsx";
import { ResContext } from "../../contexts/ResContext.jsx";
function Home() {
    const [UrlDataContext, setUrlDataContext] = useState("");
    const [ResponseContext, setResponseContext] = useState("");
    return (
        <>
            <div
                id="bg"
                className="flex items-center flex-col justify-evenly h-screen w-screen bg-zinc-900"
            >
                <UrlContext.Provider
                    value={{ UrlDataContext, setUrlDataContext }}
                >
                    <ResContext.Provider
                        value={{ ResponseContext, setResponseContext }}
                    >
                        <Navbar />
                        <MainCard />

                        <DownloderCard />
                    </ResContext.Provider>
                </UrlContext.Provider>
            </div>
        </>
    );
}

export default Home;
