let scrollBtn = document.getElementById('btn-scroll')
scrollBtn.addEventListener("click", () => {
// Scroll to a certain element
    document.querySelector('.carousel-indicators').scrollIntoView({
        behavior: 'smooth'
    });
})