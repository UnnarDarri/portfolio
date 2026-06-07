export default function initCategoryThumbnails(imgElement, images) {
  if (!imgElement) return;

  // PRELOAD (IMPORTANT FIX FOR FLASH)
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  let i = 0;

  // create second layer image
  const ghost = imgElement.cloneNode();
  ghost.id += "-ghost";
  ghost.style.opacity = 0;

  imgElement.parentElement.style.position = "relative";
  imgElement.parentElement.appendChild(ghost);

  setInterval(() => {
    i = (i + 1) % images.length;

    ghost.src = images[i];
    ghost.style.opacity = 1;
    imgElement.style.opacity = 0;
    // Use CSS transition on main img when swapping to ghost
    imgElement.style.transition = null;
    
    setTimeout(() => {
      imgElement.src = images[i];
      imgElement.style.opacity = 1;
      ghost.style.opacity = 0;
      
      // Remove transition from main img when swapping from ghost
      imgElement.style.transition = "none";
    }, 600);

  }, 5000);
}
