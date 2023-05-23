const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasser ()

        slide.classList.add('active')
    } )
}

function clearActiveClasser() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}