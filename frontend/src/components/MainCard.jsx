import React, { useState } from "react";
import Url_input from "./Url_input";
import { DownloadHandler1 } from "../helpers/DownloadBtnHandlers";

function MainCard() {
    // Changed the variable name to avoid conflict
    return (
        <>
            <div className=" mt-[15vh] flex items-center flex-col gap-4 justify-evenly rounded-2xl p-5 w-3/4 bg-[#e4e4e4]">
                <h1 className="text-center font-bold text-[2.1rem] font-[gilroy] text-[#303030ee]">
                    YouTube Video Downloader
                </h1>

                <Url_input />
                <DownloadHandler1 />
            </div>
        </>
    );
}

export default MainCard;
