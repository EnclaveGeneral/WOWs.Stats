/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper(".popular__content", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            centeredSlides: false,
        },
    },
})

/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll('.choose__faq-item')

// 1. Select each item
faqItems.forEach((item) =>{
    const faqHeader = item.querySelector('.choose__faq-header')

    // 2. Select each button click
    faqHeader.addEventListener('click', () =>{
        // 7. Select the current faq-open class
        const openItem = document.querySelector('.faq-open')

        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the faq-open class from other items
        if(openItem && openItem!= item){
            toggleItem(openItem)
        }
    })
})

// 3. Create function to display the content
const toggleItem = (item) =>{
    // 3.1. Select each faq content
    const faqContent = item.querySelector('.choose__faq-content')

    // 6. If the same item contains the faq-open class, remove
    if(item.classList.contains('faq-open')){
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    } else{
        // 4. Add max-height to the content and add the faq-open class
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }
}

/* ==== CHAT BOX === */
let chatBox = document.getElementById("chatbox");
chatBox.classList.add("hidden");
let startChatBtn = document.getElementById("start-chat-btn");
startChatBtn.addEventListener("click", openChat);
let closeChatBtn = document.getElementById("close_chat");
closeChatBtn.addEventListener("click", closeChat);

function openChat() {
    chatBox.classList.remove("hidden");
    startChatBtn.classList.add("hidden");
}

function closeChat() {
    chatBox.classList.add("hidden");
    startChatBtn.classList.remove("hidden");
}

/* ==== END CHAT BOX ==== */

function sendQuery(event) {
    event.preventDefault();
    let msg = document.querySelector(".form-container textarea").value;
    let board = document.getElementById("msg_contents");
    board.style.resize = "none";
    let newEle = document.createElement("p");
    newEle.textContent = `World of Warships" is a naval warfare-themed online multiplayer game developed by Wargaming. It is part of the "World of..." series, which also includes "World of Tanks" and "World of Warplanes." The game was officially released in September 2015 and is available on various platforms, including Windows, macOS, and PlayStation 4.

    Gameplay:
    In "World of Warships," players command historical naval vessels from various nations during the first half of the 20th century, including battleships, cruisers, destroyers, and aircraft carriers. The game features both player versus environment (PvE) and player versus player (PvP) modes.

    The gameplay is tactical and team-based, with players working together to achieve objectives such as capturing key points on the map, defending their base, or sinking enemy ships. Each ship has unique characteristics, including speed, armor, firepower, and maneuverability, and players need to consider these factors strategically during battles.`;
    board.appendChild(newEle);
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

/*=============== MATRIX Stats ===============*/
const matrixPlayerID = 1019219315;

fetch("https://api.worldofwarships.com/wows/account/statsbydate/?application_id=64d0eef050264d0d12f4752bd2989997&account_id=1019219315")
.then(statusCheck)
.then(res => res.json())
.then(displayData)
.catch(handleErrors)

function displayData(res) {
    //Display Winrate Here
    let todayDate = yyyymmdd();
    let totalBattles = res["data"]["1019219315"]["pvp"][todayDate]["battles"];
    let battlesWon = res["data"]["1019219315"]["pvp"][todayDate]["wins"];
    let winrate = battlesWon / totalBattles * 100;
    winrate = winrate.toFixed(2);
    let winrateText = document.getElementById("winrate");
    winrateText.textContent = "His PVP (Random Mode) Winrate is: " + winrate + "%";
    //Display Best Game Data

}

function yyyymmdd() {
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    return '' + y + (m < 10 ? '0' : '') + m + (d < 10 ? '0' : '') + d;
}


/**======================== StatusCheck/Error Handling ================= */
async function statusCheck(res) {
    if (!res.ok) {
        throw new Error(await res.text());
    } else {
        return res;
    }
}

function handleErrors(error) {
    console.log(error);
}
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__content, .popular__container, .products__container, .join__bg, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.choose__image, .features__image`, {origin: 'left'})
sr.reveal(`.choose__content, .features__content`, {origin: 'right'})