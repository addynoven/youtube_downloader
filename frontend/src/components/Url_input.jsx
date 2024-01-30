import React, { useContext } from "react";
import { UrlContext } from "../../contexts/UrlContext";
import download from "downloadjs";
function Url_input() {
    const { UrlDataContext, setUrlDataContext } = useContext(UrlContext);

    return (
        <>
            <div className="w-full text-center">
                <input
                    type="url"
                    name="Url_link"
                    value={UrlDataContext}
                    onChange={(e) => {
                        setUrlDataContext(e.target.value);
                    }}
                    className="border-4 p-3 border-[#303030ee] w-2/3 text-center rounded-2xl"
                    placeholder="Paste your video link here"
                />
            </div>
        </>
    );
}

export default Url_input;
