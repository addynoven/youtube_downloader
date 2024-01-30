const axios = require("axios");

const getBufferFromBlob = async (blob) => {
    try {
        console.log("we are trying our best");

        // Use axios to fetch the video directly as a Buffer
        const response = await axios.get(blob.url, {
            responseType: "arraybuffer",
        });
        const videoBuffer = Buffer.from(response.data);

        console.log("done see");
        return videoBuffer;
    } catch (error) {
        console.error(error);
        throw new Error("Internal Server Error");
    }
};

module.exports = getBufferFromBlob;
