import { viewImgs, leftArrow, rightArrow, closeViewbox } from '/gallery.js'


export function tabClick(e) {
    const tabs = document.querySelectorAll('.tab');
    const currentTarget = e.currentTarget;

    tabs.forEach(t => t.classList.remove('tab--active'));


    const vids = document.querySelectorAll('.video-link');
    vids.forEach(vid => { showCollectionByTab(e, vid, 'vid-') });


    const improvs = document.querySelectorAll('.improv-sec');
    improvs.forEach(imp => { showCollectionByTab(e, imp, '') });

    currentTarget.classList.add('tab--active');

}

function showCollectionByTab(e, collection, classprefix) {
    let id = e.currentTarget.id;
    collection.classList.add('hidden');

    // ID of tab must be same as class of collection to reveal
    if (collection.classList.contains(`${classprefix}${id}`)) {
        collection.classList.remove('hidden');
        collection.classList.add('scale-up');
    }

    document.querySelectorAll('.imp-vids .vid-vimprov').forEach(vid => vid.classList.remove('hidden'));
    const impimgs = document.querySelectorAll('.improv-img');
    impimgs.forEach(img => img.addEventListener('click', () => { viewImgs(img) }
    ));
}
