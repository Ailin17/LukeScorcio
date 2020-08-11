import imageJson from '/imagesJson.js'

const theater = imageJson.filter(img => img.category === 'theater');

console.log(theater);