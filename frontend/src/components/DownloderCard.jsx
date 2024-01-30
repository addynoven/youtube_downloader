import React, { useContext, useEffect, useState } from "react";
import { ResContext } from "../../contexts/ResContext";
import ImageComponent from "./ImageComponent";
import SelectComponent from "./SelectComponent";
import DownloadBtn from "./DownloadBtn";
import { UrlContext } from "../../contexts/UrlContext";
import download from "downloadjs";
import axios from "axios";

// download(selectedOption, `${videoId}.mp4`, "video/mp4");

function DownloaderCard() {
    const { ResponseContext } = useContext(ResContext);
    const { UrlDataContext } = useContext(ResContext);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [ImgUrl, setImgUrl] = useState(null);
    const [VideoBlob, setVideoBlob] = useState("");
    async function download_hand(selectedOption, videoId) {
        console.log(selectedOption, videoId, "line 20");
        try {
            console.log(selectedOption, videoId, "line 22");
            const response = await axios.post(
                "http://localhost:3000/VideoUrl",
                {
                    video_Url: selectedOption,
                },
                {
                    responseType: "blob", // Tell axios to expect a blob response
                }
            );
            // Create a blob URL for the video
            const videoBlob = new Blob([response.data], { type: "video/mp4" });
            const videoUrl = URL.createObjectURL(videoBlob);
            console.log(videoUrl, "line 35");
            // Now you can use the video URL as needed, for example, set it in the state
            setVideoBlob(videoUrl);
        } catch (error) {
            console.error("Error fetching video:", error);
        }
    }

    useEffect(() => {
        if (ResponseContext && ResponseContext[0]) {
            const newOptions = ResponseContext[1].map((element) => ({
                label: element.label,
                value: element.url,
                key: element.key,
            }));
            setImgUrl(ResponseContext[0]["thumbnail_url"][0].url);
            setOptions(newOptions);
        }
    }, [ResponseContext]);
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return ResponseContext && ResponseContext[0] ? (
        <div className="bg-white flex rounded-xl overflow-hidden">
            <ImageComponent imageUrl={ImgUrl} />
            <div className="bg-white flex gap-2 items-center justify-center px-6 rounded-md overflow-hidden">
                <SelectComponent
                    options={options}
                    selectedOption={selectedOption}
                    onChange={handleSelectChange}
                />
                {selectedOption ? (
                    <DownloadBtn
                        onClickHandler={() => {
                            download_hand(
                                selectedOption,
                                ResponseContext[2].videoId
                            );
                        }}
                    />
                ) : null}
            </div>
        </div>
    ) : null;
}

export default DownloaderCard;
