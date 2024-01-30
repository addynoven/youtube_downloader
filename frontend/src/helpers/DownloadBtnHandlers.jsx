import React, { useContext } from "react";
import { UrlContext } from "../../contexts/UrlContext";
import { ResContext } from "../../contexts/ResContext";
import axios from "axios";
import DownloadBtn from "../components/DownloadBtn";

// Handler 1
export function DownloadHandler1() {
    const { UrlDataContext } = useContext(UrlContext);
    const { setResponseContext } = useContext(ResContext);
    const handleClick = async () => {
        try {
            const res = await axios.post("/link", {
                yt_link: UrlDataContext,
            });
            console.log(res.data);
            setResponseContext(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    return <DownloadBtn onClickHandler={handleClick} />;
}

// Handler 2
export function DownloadHandler2() {
    const handleClick = () => {};
    return <DownloadBtn onClickHandler={handleClick} />;
}
