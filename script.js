// LENIS smooth scroll
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// GSAP animations
gsap.registerPlugin(ScrollTrigger)

// fade in sections
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  })
})

// loader animation
window.addEventListener("load", () => {
  gsap.to("#loader", {
    opacity: 0,
    duration: 1,
    delay: 1,
    onComplete: () => document.getElementById("loader").remove()
  })
})
