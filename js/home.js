const playButton = document.getElementById("showreel-play-button");
const playerContainer = document.getElementById("showreel-container");

playButton.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/WCzgM3aWdXU?autoplay=1&playsinline=0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    playerContainer.replaceChildren(iframe);
    playButton.remove();
});
