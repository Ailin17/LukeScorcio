
import { navigation } from '/navigation.js'
import landingPage from '/landingpage.js'
import { tabClick } from '/gallery.js'




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
const tabs = document.querySelectorAll('.tab');
const imgs = document.querySelectorAll('.gallery-img');
const vids = document.querySelectorAll('.video-link');
const iframes = document.querySelectorAll('iframe');
const impimgs = document.querySelectorAll('.improv-img');
const impvids = document.querySelectorAll('.improv-video-link');
const improvs = document.querySelectorAll('.improv-sec');
const lightbox = document.querySelector('#lightbox');
const vidbox = document.querySelector('#vidbox');



//==================Navigation===================//
navlinks.forEach(link => link.addEventListener('click', (e) => {
    navigation(e.currentTarget.id);
}))

//==================Landing Page===================//
const landing_btn = document.querySelector('#contact-info__btn');

landing_btn.addEventListener('click', landingPage);


tabs.forEach(tab => tab.addEventListener('click', (e) => { tabClick(e) }))
/* (e) => {

    tabs.forEach(t => t.classList.remove('tab--active'))
    const currentTarget = e.currentTarget.id;


    const currentView = testjson.filter(img => img.category === currentTarget);

    let html = ''
    const imagesToShow = currentView.forEach(img => 
        html +=`<img src="img/${img.filename}" alt="" class="gallery-img gallery-img--${img.category} scale-up ${ img.class ? img.class : '' }">`
        )

    document.querySelector('.gallery-img-wrapper').innerHTML = html;
    console.log(imagesToShow);



    //  let id = e.target.id !== '' ? e.target.id : e.target.parentElement.id;

    //    imgs.forEach(img => { showCollectionByTab(e, img, 'gallery-img--') });
    
        vids.forEach(vid => { showCollectionByTab(e, vid, 'vid-') });
    
        improvs.forEach(imp => { showCollectionByTab(e, imp, '') }); 

    tab.classList.add('tab--active');
}
)) */


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

lightbox.addEventListener('click', e => { closeViewbox(e, lightbox); })


const rarr = document.getElementById('rarr'); // Right Arrow
const larr = document.getElementById('larr'); // Left Arrow

// Previous Image
if (larr) {
    larr.addEventListener('click', leftArrow);
}

if (rarr) {
    rarr.addEventListener('click', rightArrow);
}
// Next Image

// =================================================================================== //
// ==================================== Functions ==================================== //
// =================================================================================== //



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



