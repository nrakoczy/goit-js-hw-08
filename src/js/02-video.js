import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const videoIframeEl = document.getElementById("vimeo-player");
const videoPlayer = new Player(videoIframeEl);

const getDurationTime = (data) => {
	localStorage.setItem("videoplayer-current-time", data.seconds);
};

const throttledDurationTime = throttle(getDurationTime, 1000);
videoPlayer.on("timeupdate", throttledDurationTime);

const captureTime = localStorage.getItem("videoplayer-current-time");
videoPlayer.setCurrentTime(captureTime);