function initLightbox() {
  const images = document.querySelectorAll(".lightbox-viewable");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) {
    console.log("Lightbox missing");
    return;
  }

  images.forEach((img) => {

    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });

  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

};

initLightbox();
