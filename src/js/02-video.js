
import Player from "@vimeo/player";
import { throttle } from "lodash.throttle";

const videoEl = document.getElementById("vimeo-player");
const videoPlayer = new Player(videoEl);

const saveTime = throttle((data) => {
	localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000);

const currentSavedTime = localStorage.getItem("videoplayer-current-time");
if (currentSavedTime) {
	videoPlayer.setCurrentTime(currentSavedTime);
}

videoPlayer.on("timeupdate", saveTime);