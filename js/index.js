const hamburger = document.querySelector(".hamburger"),
    navMenu = document.querySelector(".nav__menu"),
    navlinks = document.querySelectorAll(".nav__link"),
    body = document.querySelector("body"),
    darkLight = document.querySelector(".dark-light-mode"),
    darkMode = document.querySelector(".dark-mode"),
    lightMode = document.querySelector(".light-mode"),
    login = document.querySelector('.login-link'),
    loginpage = document.querySelector('.center'),
    containers = document.querySelector('.hero-container'),
    heroHeading = document.querySelector('.hero-heading'),
    left = document.querySelector('.left'),
    leftBtn = document.querySelector('.left-btn'),
    right = document.querySelector('.right'),
    rightBtn = document.querySelector('.right-btn'),
    featureBtn = document.querySelector('.feature-btn'),
    feature = document.querySelector('.features'),
    planDivs = document.querySelectorAll('.plan-div'),
    searchBar = document.querySelector('.searchbar'),
    dropdown = document.querySelector('.dropdown-menu'),
    domainBtn = document.querySelector('.domain-btn'),
    home = document.querySelector('.bx-home'),
    features = document.querySelector('.features'),
    mainFeatures = document.querySelector('.main-features')


darkLight.addEventListener('click', () => {
    body.classList.toggle('dark')
    darkMode.classList.toggle('mode-switch')
    lightMode.classList.toggle('mode-switch')
})


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    loginpage.classList.remove('active-login')

})

// ===================== LOGIN-PAGE =====================

login.addEventListener('click', () => {
    loginpage.classList.toggle('active-login')

})

document.querySelector('.cross').addEventListener('click', () => {
    loginpage.classList.remove('active-login')

})

// ====================== DROPDOWN-MENU ===========================

document.addEventListener('click', (e) => {

    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;
    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('activeDrop')
    }

    document.querySelectorAll("[data-dropdown].activeDrop").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('activeDrop')
    })
})


// =================== SPLIT =========================
left.addEventListener('mouseover', () => {
    containers.classList.toggle('hover-left')
})
left.addEventListener('mouseout', () => {
    containers.classList.toggle('hover-left')
})

right.addEventListener('mouseover', () => {
    containers.classList.toggle('hover-right')
})
right.addEventListener('mouseout', () => {
    containers.classList.toggle('hover-right')
})

leftBtn.addEventListener('mouseover', () => {
    left.style.backgroundColor = 'hsl(243, 100%, 96%)'
})
leftBtn.addEventListener('mouseout', () => {
    left.style.backgroundColor = 'hsl(253, 100%, 22%)'

})
rightBtn.addEventListener('mouseover', () => {
    right.style.backgroundColor = 'hsl(253, 100%, 22%)'
})
rightBtn.addEventListener('mouseout', () => {
    right.style.backgroundColor = 'hsl(243, 100%, 96%)'
})

//  ======================= PLANS ===========================
planDivs.forEach(plan => {
    plan.addEventListener('click', () => {
        removeactive();
        plan.classList.add('active')
    })
})

function removeactive() {
    planDivs.forEach(plan => {
        plan.classList.remove('active')
    })
}

// ================== Domain section ======================
domainBtn.addEventListener('click', () => {
    domainBtn.classList.toggle('active-btn')
    searchBar.classList.toggle('active-searchbar')
    searchIcon.classList.toggle('active-search')

})


// ======================= SWIPER(TESTIMONIAL) ============================

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


