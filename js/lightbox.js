function initLightbox() {
  const images = document.querySelectorAll(".lightbox-viewable");
  const lightbox = document.getElementById("lightbox");

  const pictureElements = {};

  if (!lightbox) {
    console.log("Lightbox missing");
    return;
  }

  images.forEach((img) => {
    // Create lightbox image element for each clicked image
    pictureElements[img.src] = img.parentElement.cloneNode(true);

    img.addEventListener("click", () => {
      if (pictureElements[img.src] === undefined) {
        console.log(`Error: Lightbox picture element unavailable for image with src: ${img.src}`);
        return;
      }
      
      // Replace lightbox image with clicked image
      lightbox.replaceChildren(pictureElements[img.src]);

      // Show lightbox
      lightbox.style.display = "flex";      
    });

  });

  lightbox.addEventListener("click", () => {
    // Hide lightbox
    lightbox.style.display = "none";
  });

};

initLightbox();
