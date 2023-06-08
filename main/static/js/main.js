

document.addEventListener("DOMContentLoaded", initScroll)

function initScroll(){
    const links = document.getElementsByClassName("nav-link")
    for (const link of links) {
        link.addEventListener("click", scrollTo)
    }
}

function scrollTo(event){
    event.preventDefault()
    let href = this.getAttribute('href')
    console.log(href)
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const topOffset = 50;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}