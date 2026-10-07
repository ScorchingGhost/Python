const videoPlayer = document.querySelector(".video-player");
let closeTimer;

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

videoPlayer.addEventListener("ended", () => {
    closeTimer = setTimeout(() => {
        closeTimer = undefined;
        closeVideo();
    }, 1000);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !videoPlayer.hidden) {
        clearTimeout(closeTimer);
        closeTimer = undefined;
        closeVideo();
    }
});

