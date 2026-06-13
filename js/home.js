const playButton = document.getElementById("showreel-play-button");
const playerContainer = document.getElementById("showreel-container");
const VIDEO_ID = "WCzgM3aWdXU";

playButton.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&playsinline=0&rel=0`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    playerContainer.replaceChildren(iframe);
    playButton.remove();
});
