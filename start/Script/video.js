
// get the video player element and initialize the close timer
const videoPlayer = document.querySelector(".video-player");
let closeTimer;


// check the files to see if a viseo is attached to the button assigned to it otherwise add a message to the button
document.querySelectorAll(".button[data-video]").forEach(async (button) => {
    try {
        const response = await fetch(button.dataset.video, { method: "HEAD" });
        if (!response.ok) {
            button.textContent += " (Video missing)";
        }
    } catch (error) {
        console.error(`Could not check video for ${button.textContent}.`, error);
    }
});


// closes the video player and resets the video source
async function closeVideo() {
    if (document.fullscreenElement === videoPlayer) {
        await document.exitFullscreen().catch(() => {});
    } else if (videoPlayer.webkitDisplayingFullscreen && videoPlayer.webkitExitFullscreen) {
        videoPlayer.webkitExitFullscreen();
    }

    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    videoPlayer.hidden = true;
}


// when button pressed opens video in fullscreen and plays it, if the video is missing it will not play
document.querySelectorAll(".button[data-video]").forEach((button) => {
    button.addEventListener("click", () => {
        clearTimeout(closeTimer);
        videoPlayer.src = button.dataset.video;
        videoPlayer.hidden = false;
        videoPlayer.load();

        if (videoPlayer.requestFullscreen) {
            videoPlayer.requestFullscreen().catch(() => {});
        } else if (videoPlayer.webkitEnterFullscreen) {
            videoPlayer.webkitEnterFullscreen();
        }

        videoPlayer.play().catch(() => {});
    });
});


// when the video ends, start a timer to close the video player after 1 second
videoPlayer.addEventListener("ended", () => {
    closeTimer = setTimeout(() => {
        closeTimer = undefined;
        closeVideo();
    }, 1000);
});


// DIT MOET NOG WEG
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !videoPlayer.hidden) {
        clearTimeout(closeTimer);
        closeTimer = undefined;
        closeVideo();
    }
});
