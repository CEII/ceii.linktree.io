var slideIndex, slides, timer, isPaused = false

function initGallery() {
    slides = document.getElementsByClassName("imageHolder")
    slideIndex = slides.length - 1

    slideChange()
}

function slideChange() {
    for (let i = slides.length - 1; i > 0; i--) {
        slides[i].addEventListener("click", () => { console.log(isPaused = !isPaused) })
    }


    timer = setInterval(() => {
        if (!isPaused) {
            slides[slideIndex].style.opacity = 0
            mapSlideIndex()
        }
    }, 5000)
}

function mapSlideIndex() {
    slideIndex--

    if (slideIndex < 0) {
        slideIndex = slides.length - 1

        slides[slideIndex].style.opacity = 1
        
        isPaused = true

        for (let i = slides.length - 1; i > 0; i--) {
            slides[i].style.opacity = 1
        }

        isPaused = false
    }
}

initGallery()