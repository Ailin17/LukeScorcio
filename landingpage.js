export default function landingPage(){
    const landing_btn = document.querySelector('#contact-info__btn');
    const contact_info = document.querySelector(".contact-info").classList;

    document.querySelector('.agent-contact').classList.remove('hidden');
    document.querySelector('.luke-info').classList.remove('hidden');

    contact_info.add('mobile-bg');
    landing_btn.classList.add('hidden');
    
    document.querySelector('.img-wrapper').classList.add('desaturate');
    document.querySelector('.landing-page').classList.add('open-contact');
}