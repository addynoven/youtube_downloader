const { getInfo } = require("ytdl-core");

const getVideoInfo = async (ytLink) => {
    try {
        const info = await getInfo(ytLink);
        const thumbnail = {
            thumbnail_url: info.videoDetails.thumbnails.slice(-1),
        };
        const videoId = { videoId: info.videoDetails.videoId };
        const formats = [];
        const output = [thumbnail, formats, videoId];

        info.formats.forEach((ele) => {
            const videoCodec = ele.videoCodec;
            const value = ele.url;
            const contentLengthMB = ele.contentLength
                ? (ele.contentLength / (1024 * 1024)).toFixed(2)
                : null;
            if (videoCodec && videoCodec.startsWith("avc1")) {
                const label = ele.qualityLabel;
                const key = `${ele.qualityLabel}_${ele.hasAudio}`;
                formats.push({
                    key,
                    label,
                    url: value,
                    type: "video",
                    hasAudio: ele.hasAudio,
                    hasVideo: ele.hasVideo,
                    fileSizeInMB: contentLengthMB,
                });
            } else if (
                ele.audioCodec == "opus" &&
                ele.audioQuality == "AUDIO_QUALITY_MEDIUM"
            ) {
                const key = `AUDIO_${ele.hasAudio}`;
                formats.push({
                    key,
                    label: "AUDIO",
                    url: value,
                    type: "audio",
                    hasAudio: ele.hasAudio,
                    hasVideo: ele.hasVideo,
                    fileSizeInMB: contentLengthMB,
                });
            }
        });
        return output;
    } catch (error) {
        console.error(error);
        throw new Error("Internal Server Error");
    }
};

module.exports = getVideoInfo;
