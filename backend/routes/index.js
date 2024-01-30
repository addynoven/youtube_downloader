// routes/videoRoutes.js
const express = require("express");
const getVideoInfo = require("../controllers/LinkController");
const getVideoBlob = require("../controllers/videoController");
const { Readable } = require("stream");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Express" });
});

router.post("/link", async (req, res) => {
    const ytLink = req.body.yt_link;
    if (!ytLink) {
        res.json("bad request, try again");
        return;
    }
    try {
        const videoInfo = await getVideoInfo(ytLink);
        res.json(videoInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
});

router.post("/VideoUrl", async (req, res) => {
    const video_Url = req.body.video_Url;
    console.log(video_Url);
    if (!video_Url) {
        res.json("bad request, try again");
        return;
    }
    try {
        console.log("welcome");
        const videoBlob = await getVideoBlob(video_Url);

        // Convert the Blob to a Buffer
        const videoBuffer = await getBufferFromBlob(videoBlob);

        // Set appropriate headers for the Buffer
        res.setHeader("Content-Type", "video/mp4");
        // Send the Buffer as a response
        res.end(videoBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
});

const getBufferFromBlob = (blob) => {
    return new Promise((resolve, reject) => {
        const chunks = [];

        const stream = new Readable();
        stream._read = () => {};

        stream.on("data", (chunk) => {
            chunks.push(chunk);
        });
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

        stream.on("end", () => {
            resolve(Buffer.concat(chunks));
        });

        stream.on("error", (error) => {
            reject(error);
        });

        blob.stream().pipe(stream);
    });
};

module.exports = router;
