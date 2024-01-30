import React from "react";

function DownloadBtn({ onClickHandler }) {
    return (
        <button
            type="button"
            onClick={onClickHandler}
            className="uppercase w-fit h-fit active:scale-[0.9] text-center text-white px-3 py-2 rounded-2xl bg-[#232323ee]"
        >
            Download
        </button>
    );
}

export default DownloadBtn;
