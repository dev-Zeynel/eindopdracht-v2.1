
const section = document.querySelector('.IntroVideo')
const vid = document.querySelector('video')

vid.pause()

//This is the code to make the banner video play on scroll
const scroll = () => {
    const distance = window.scrollY - section.offsetTop
    const total = section.clientHeight - window.innerHeight

    let percentage = distance / total
    percentage = Math.max(0, percentage)
    percentage = Math.min(percentage, 1)

    if (vid.duration > 0) {
        vid.currentTime = vid.duration * percentage
    }
}

scroll()
window.addEventListener("scroll", scroll)

// Tutorial Bron: https://www.youtube.com/watch?v=L1eu737bu70