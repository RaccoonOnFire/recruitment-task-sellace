const menuBtn = document.querySelector('.menu-btn')
const mobileMenu = document.querySelector('.mobile-menu')

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('hidden')
}

menuBtn.addEventListener('click', toggleMobileMenu)

