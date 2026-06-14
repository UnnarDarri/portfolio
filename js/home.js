const VIDEO_ID = "WCzgM3aWdXU";

const playButton = document.getElementById("showreel-play-button");
const playerContainer = document.getElementById("showreel-container");
const desktopVideo = playerContainer.querySelector(".showreel-preview");
const mobileVideo = playerContainer.querySelector(".showreel-preview-mobile");

// Sources for showreel video (dynamically picked based on viewport width)
const videoSources = {
  desktop: [
    {
      src: "/static/videos/showreel-preview.webm",
      type: "video/webm; codecs=vp9",
    },
    {
      src: "/static/videos/showreel-preview.mp4",
      type: "video/mp4",
    },
  ],
  mobile: [
    {
      src: "/static/videos/showreel-preview-square.webm",
      type: "video/webm; codecs=vp9",
    },
    {
      src: "/static/videos/showreel-preview-square.mp4",
      type: "video/mp4",
    },
  ]
};

/**
 * Initializes proper showreel video sources based on current viewport size
 * @param {MediaQueryList} mql 
 */
function initVideoSources(mql) {
  if (mql.matches) {
    // Mobile
    // Add sources if none are present
    if (mobileVideo.childElementCount === 0) {
      videoSources.mobile.forEach((source) => addSource(mobileVideo, source));
    }
  } else {
    // Desktop
    // Add sources if none are present
    if (desktopVideo.childElementCount === 0) {
      videoSources.desktop.forEach((source) => addSource(desktopVideo, source));
    }
  }
}

/**
 * Creates a <source> element from an object and adds it as a child of mediaEl
 * @param {HTMLMediaElement} mediaEl - Media element to add sources to
 * @param {object} source - Object containing the desired source object's attributes
 */
function addSource(mediaEl, source) {
  const el = Object.assign(document.createElement("source"), source);
  mediaEl.appendChild(el);
}

// Showreel play button
playButton.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&playsinline=0&rel=0`;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  playerContainer.replaceChildren(iframe);
  playButton.remove();
});

// Listen for media query changes to initialize video sources if needed
const mobileMql = window.matchMedia("(width <= 45rem)");
mobileMql.addEventListener("change", initVideoSources);

// Initialize video sources for initial viewport size
initVideoSources(mobileMql);
