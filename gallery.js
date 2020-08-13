import imageJson from '/imagesJson.js'



export function galleryTabClick(e) {
    const tabs = document.querySelectorAll('.gallery-tab');
    tabs.forEach(t => t.classList.remove('tab--active'));

    // Tab Clicked
    const currentTarget = e.currentTarget;

    // Filter image object by tab
    const currentView = imageJson.filter(img => img.category === currentTarget.id);

    // Create html of images 
    let html = ''
    currentView.forEach(img =>
        html += `<img src="img/${img.filename}" alt="" class="gallery-img gallery-img--${img.category} scale-up ${img.class ? img.class : ''}">`
    )

   
    // Show images
    document.querySelector('.gallery-img-wrapper').innerHTML = html;

    //Add Event listener

    const imgs = document.querySelectorAll('.gallery-img');
    imgs.forEach(img => img.addEventListener('click', e => {
        viewImgs(img);
    }))


    //  let id = e.target.id !== '' ? e.target.id : e.target.parentElement.id;

    //    imgs.forEach(img => { showCollectionByTab(e, img, 'gallery-img--') });

    const vids = document.querySelectorAll('.video-link');
    vids.forEach(vid => { showCollectionByTab(e, vid, 'vid-') });


    const improvs = document.querySelectorAll('.improv-sec');
    improvs.forEach(imp => { showCollectionByTab(e, imp, '') });

    currentTarget.classList.add('tab--active');

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


export function viewImgs(clickedImg) {

    lightbox.classList.add('active');

    // Set large image source to the selected img
    const big_image = document.getElementById('big-image');
    big_image.src = clickedImg.src;

}


export function leftArrow() {
    let last = imageJson.length
    let current_img = document.getElementById('big-image').src;
    let current_arr = current_img.split('img/img');
    let currentImgIndex = parseInt(current_arr[1].split('.jpg')[0]);

    // If next number is more than the gallery contains, it returns to the first number
    let new_img = currentImgIndex == 1 ? last : currentImgIndex - 1;

    document.getElementById('big-image').src = `img/img${new_img}.jpg`;
}

export function rightArrow() {
    let last = imageJson.length
    let current_img = document.getElementById('big-image').src;
    let current_arr = current_img.split('img/img');
    let currentImgIndex = parseInt(current_arr[1].split('.jpg')[0]);

    // If next number is more than the gallery contains, it returns to the first number
    let new_img = currentImgIndex == last ? 1 : currentImgIndex + 1;

    document.getElementById('big-image').src = `img/img${new_img}.jpg`;
}


export function closeViewbox(e, viewbox, iframes) {
    if (e.target == e.currentTarget) {
        viewbox.classList.remove('active');
/*         // Stops video
        if (iframes) {
            iframes.forEach(iframe => {
                let iframeSrc = iframe.src;
                iframe.src = iframeSrc;
            });
        } */
    }

}





