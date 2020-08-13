
import { navigation, menuToggle } from '/navigation.js'
import landingPage from '/landingpage.js'
import { galleryTabClick, leftArrow, rightArrow, closeViewbox } from '/gallery.js'
import { tabClick } from '/tabs.js'




if (window.location.hash) {
    navigation(window.location.hash.substr(1));
}
const ratio = screen.width / screen.height;
const contact_info = document.querySelector(".contact-info").classList;

if (screen.width < 600 && ratio < 0.56221) {
    contact_info.add('long-viewport');
}


//================== Global Variables ===================//
const navlinks = document.querySelectorAll('.main-nav__item');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const improvTabs = document.querySelectorAll('.improv-tab');
const videoTabs = document.querySelectorAll('.video-tab');
const lightbox = document.querySelector('#lightbox');
const landing_btn = document.querySelector('#contact-info__btn');
const menuBtn = document.querySelector('.main-nav__menu-btn');



//==================Navigation===================//
navlinks.forEach(link => link.addEventListener('click', (e) => {
    navigation(e.currentTarget.id);
}))

menuBtn.addEventListener('click', menuToggle);

//==================Landing Page===================//

landing_btn.addEventListener('click', landingPage);


galleryTabs.forEach(tab => tab.addEventListener('click', (e) => { galleryTabClick(e) }))
improvTabs.forEach(tab => tab.addEventListener('click', (e) => { tabClick(e) }))
videoTabs.forEach(tab => tab.addEventListener('click', (e) => { tabClick(e) }))




lightbox.addEventListener('click', e => { closeViewbox(e, lightbox); })


const rarr = document.getElementById('rarr'); // Right Arrow
const larr = document.getElementById('larr'); // Left Arrow

// Previous Image
// TODO send in JSON 
larr.addEventListener('click', () => { leftArrow() });


// Next Image
// TODO send in JSON
rarr.addEventListener('click', () => { rightArrow() });
