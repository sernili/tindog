// For soft scroll in navbar
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();

        const hrefAttribute = document.querySelector(anchor.getAttribute('href'));
        hrefAttribute.scrollIntoView({ behavior: 'smooth'});
    });
});

// Soft scroll with scroll button
document.querySelector('.scroll-btn').addEventListener("click", () => {
    document.querySelector('html').style.scrollBehavior = "smooth";
    
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unset";
    }, 1000)
});

// Hide scroll button when on top
const arrowButton = document.querySelector(".scroll-btn");

let hidden = true;

window.onscroll = function(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        // when not at top
        if (arrowButton.classList.contains('hide-btn')) {
            arrowButton.classList.remove('hide-btn');
        } 
        
    } else {
        // when at top
        if (!arrowButton.classList.contains('hide-btn')) {
            arrowButton.classList.add('hide-btn');
        } 
    }
}