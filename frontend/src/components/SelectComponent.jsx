import React from "react";

function SelectComponent({ options, selectedOption, onChange }) {
    console.log(selectedOption);
    return (
        <select
            name="video_download"
            id="download_Sel"
            value={selectedOption}
            onChange={onChange}
        >
            <option value="" disabled>
                Select an option
            </option>
            {options.length > 0 ? (
                options.map((option) => (
                    <option key={option.key} value={option.value}>
                        {" "}
                        {/* Use option.value instead of option.url */}
                        {option.label}
                    </option>
                ))
            ) : (
                <option value="" disabled>
                    Loading options...
                </option>
            )}
        </select>
    );
}

export default SelectComponent;
