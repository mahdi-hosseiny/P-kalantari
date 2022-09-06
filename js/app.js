const navbartoggler= document.querySelector(".navbar-toggler")
const btnclose= document.querySelector(".btn-close")
navbartoggler.addEventListener("click", ()=>{
    navbartoggler.classList.add('hidenav')
})
btnclose.addEventListener("click" , ()=>{
    navbartoggler.classList.remove('hidenav')
})