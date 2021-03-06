/* const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant'); 

(async () => {
    const files = await imagemin(['images/*.{jpg,png}'], {
        destination: 'build/img',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });

    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})(); */

document.addEventListener("DOMContentLoaded", function (event) {


    if (window.location.hash) {
        navigation(window.location.hash.substr(1));
    }
    const ratio = screen.width / screen.height;
    const contact_info = document.querySelector(".contact-info").classList;

    if (screen.width < 600 && ratio < 0.56221) {
        contact_info.add('long-viewport');
    }

    //==================Landing Page===================//
    const landing_btn = document.querySelector('#contact-info__btn');

    landing_btn.addEventListener('click', () => {
        document.querySelector('.agent-contact').classList.remove('hidden');
        document.querySelector('.luke-info').classList.remove('hidden');
        contact_info.add('mobile-bg');
        landing_btn.classList.add('hidden');
        document.querySelector('.img-wrapper').classList.add('desaturate');
        document.querySelector('.landing-page').classList.add('open-contact');
    })

    //================== Global Variables ===================//

    const tabs = document.querySelectorAll('.tab');
    const imgs = document.querySelectorAll('.gallery-img');
    const vids = document.querySelectorAll('.video-link');
    const iframes = document.querySelectorAll('iframe');
    const impimgs = document.querySelectorAll('.improv-img');
    const impvids = document.querySelectorAll('.improv-video-link');
    const improvs = document.querySelectorAll('.improv-sec');
    const lightbox = document.querySelector('#lightbox');
    const vidbox = document.querySelector('#vidbox');

    tabs.forEach(tab => tab.addEventListener('click', (e) => {

        tabs.forEach(t => t.classList.remove('tab--active'))

        let id = e.target.id !== '' ? e.target.id : e.target.parentElement.id;

        imgs.forEach(img => { showCollectionByTab(e, img, 'gallery-img--') });

        vids.forEach(vid => { showCollectionByTab(e, vid, 'vid-') });

        improvs.forEach(imp => { showCollectionByTab(e, imp, '') });

        tab.classList.add('tab--active');
    }
    ))


    imgs.forEach(img => img.addEventListener('click', e => {
        let least = 1;
        let most = imgs.length;
        viewImgs(img, least, most);

    }))

    impimgs.forEach(impimg => impimg.addEventListener('click', e => {
        let least = 13;
        let most = 15;
        viewImgs(impimg, least, most);
    }))


    /*     viewVids(vids, vidbox, iframes);
        viewVids(impvids, vidbox, iframes); */

    lightbox.addEventListener('click', e => { closeViewbox(e, lightbox); })
    //  vidbox.addEventListener('click', e => { closeViewbox(e, vidbox, iframes); })




});


const rarr = document.getElementById('rarr'); // Right Arrow
const larr = document.getElementById('larr'); // Left Arrow

// Previous Image
/* if (larr){
    larr.addEventListener('click', leftArrow());
}

if (rarr) {
    rarr.addEventListener('click', rightArrow());
} */
// Next Image

// =================================================================================== //
// ==================================== Functions ==================================== //
// =================================================================================== //


// ======================================= Menu ====================================== //

function navigation(section) {
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

function menuToggle() {

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

// ============================== Images and Videos =============================== //

function viewImgs(img, least, most) {

    lightbox.classList.add('active');

    // Set large image source to the selected img
    const big_image = document.getElementById('big-image');
    big_image.src = img.src;

    localStorage.setItem('least', least);
    localStorage.setItem('most', most);
}


function leftArrow() {
    let least = localStorage.getItem('least');
    let most = localStorage.getItem('most');
    let current_img = document.getElementById('big-image').src;
    let current_arr = current_img.split('img/img');
    let number = parseInt(current_arr[1].split('.jpg')[0]);

    // If next number is more than the gallery contains, it returns to the first number
    let new_img = number == least ? most : number - 1;

    document.getElementById('big-image').src = `img/img${new_img}.jpg`;
}

function rightArrow() {
    let least = localStorage.getItem('least');
    let most = localStorage.getItem('most');
    let current_img = document.getElementById('big-image').src;
    let current_arr = current_img.split('img/img');
    let number = parseInt(current_arr[1].split('.jpg')[0]);

    // If next number is more than the gallery contains, it returns to the first number
    let new_img = number == most ? least : number + 1;

    document.getElementById('big-image').src = `img/img${new_img}.jpg`;
}


function closeViewbox(e, viewbox, iframes) {
    if (e.target == e.currentTarget) {
        viewbox.classList.remove('active');

        // Stops video
        if (iframes) {
            iframes.forEach(iframe => {
                let iframeSrc = iframe.src;
                iframe.src = iframeSrc;
            });
        }
        const rarr = document.getElementById('rarr'); // Right Arrow
        const larr = document.getElementById('larr'); // Left Arrow

        localStorage.removeItem('least');
        localStorage.removeItem('most');
    }

}

function showCollectionByTab(e, collection, classprefix) {
    let id = e.target.id !== '' ? e.target.id : e.target.parentElement.id;
    collection.classList.add('hidden');

    // ID of tab must be same as class of collection to reveal
    if (collection.classList.contains(`${classprefix}${id}`)) {
        collection.classList.remove('hidden');
        collection.classList.add('scale-up');
    }

    document.querySelectorAll('.imp-vids .vid-vimprov').forEach(vid => vid.classList.remove('hidden'));
}



/* function viewVids(videos, vidbox, iframes) {
    videos.forEach(video => video.addEventListener('click', e => {

        vidbox.classList.add('active');

        iframes.forEach(iframe => iframe.classList.add('hidden'));

        // Shows selected video
        let targ = video.id;
        document.querySelector(`.${targ}`).classList.remove('hidden');

    }))
} */


