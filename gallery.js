import imageJson from '/imagesJson.js'



export function tabClick(e) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('tab--active'));

    // Tab Clicked
    const currentTarget = e.currentTarget.id;

    // Filter image object by tab
    const currentView = imageJson.filter(img => img.category === currentTarget);

    // Create html of images 
    let html = ''
    const imagesToShow = currentView.forEach(img =>
        html += `<img src="img/${img.filename}" alt="" class="gallery-img gallery-img--${img.category} scale-up ${img.class ? img.class : ''}">`
    )
    // Show images
    document.querySelector('.gallery-img-wrapper').innerHTML = html;
   



    //  let id = e.target.id !== '' ? e.target.id : e.target.parentElement.id;

    //    imgs.forEach(img => { showCollectionByTab(e, img, 'gallery-img--') });

    vids.forEach(vid => { showCollectionByTab(e, vid, 'vid-') });

    improvs.forEach(imp => { showCollectionByTab(e, imp, '') });

    tab.classList.add('tab--active');

}