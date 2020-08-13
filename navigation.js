
export function navigation(section) {
    // Hide all sections
    let arr = Array.from(document.getElementsByTagName("section"));
    arr.forEach(a => a.classList.add('hidden'));

    // Show current section
    let page = document.getElementById(`section-${section}`).classList;
    page.remove('hidden');

    menuToggle();

    // Highlight current menu item
    let items = Array.from(document.getElementsByClassName("main-nav__item"));
    items.forEach(a => a.classList.remove('main-nav__item--active'));
    document.querySelector(`.nav-${section}`).classList.add('main-nav__item--active');

    // Remove Name
    let name_wrapper = document.querySelector('.name-wrapper').classList;
    name_wrapper.add('hidden');

    if (section !== 'landing-page') {
        name_wrapper.remove('hidden');
    } else {
        // Returns to landing page with Get in Touch button back
        document.querySelector('.agent-contact').classList.add('hidden');
        document.querySelector('.luke-info').classList.add('hidden');
        document.querySelector('#contact-info__btn').classList.remove('hidden');
        document.querySelector('.contact-info').classList.remove('mobile-bg');
        document.querySelector('.img-wrapper').classList.remove('desaturate');
        document.querySelector('.landing-page').classList.remove('open-contact');
    }

    // Selects first tab on page 
    if (section === 'gallery') { document.getElementById("headshot").click(); }
    else if (section === 'videos') { document.getElementById("reels").click(); }
    else if (section === 'resume') { document.querySelector(".resume").classList.remove('hidden'); }

    else if (section === 'improv') { document.getElementById("imp-vids").click(); }

}

export function menuToggle() {

    const menu = document.getElementById("menu-list").classList;
    const nav_container = document.getElementById("nav-container").classList;

    // Show hamburger on small screen
    if (window.innerWidth < 1000 && menu.contains('md-hidden')) {
        menu.remove('md-hidden');
        nav_container.add('big-menu');
    } else {
        menu.add('md-hidden');
        nav_container.remove('big-menu');
    }

    document.querySelector('.main-nav__menu-btn').blur();
}