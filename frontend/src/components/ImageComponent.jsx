import React from "react";

function ImageComponent({ imageUrl }) {
    console.log(imageUrl);
    return (
        <div className="bg-white w-52 rounded-tl-md overflow-hidden">
            <img
                src={imageUrl}
                alt=""
                className="w-full h-full object-cover bg-no-repeat"
            />
        </div>
    );
}

export default ImageComponent;
