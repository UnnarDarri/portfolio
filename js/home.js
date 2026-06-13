const playButton = document.getElementById("showreel-play-button");
const player = document.getElementById("showreel-preview");

playButton.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/WCzgM3aWdXU";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    player.replaceWith(iframe);
    playButton.remove();
});
