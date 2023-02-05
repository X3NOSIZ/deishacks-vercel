const url1 = `https://deishacks-image-production.up.railway.app`;
const url2 = `https://deishacks-image-production.up.railway.app/mobile`;

// detect if the user is on a mobile device
// if the user is on a mobile device, use url2 else use url1
const url = window.innerWidth <= 800 ? url2 : url1;

const carousel = document.getElementById('carousel');


const getTwoPhotos = async () => {
    try {
        let result = await fetch(url);
        let data = await result.json();
        console.log(data);
        let imageList = [];
        for (let i = 0; i < data.images.length; i++) {
            let photo = data.images[i];
            imageList.push(photo);
        }
        return imageList;
    } catch (error) {
        console.log(error);
    }
}


getTwoPhotos().then(photosList => {
    photos = photosList;
    index = 0;
    console.log(photos);
    carousel.style.backgroundImage = `url(${photos[0]})`;
})

const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');


// click on the image to go to the next image
carousel.addEventListener('click', ()=> {
    if(index === photos.length - 1) {
        index = 0;
        carousel.style.backgroundImage = `url(${photos[index]})`;
    } else {
        index++;
        carousel.style.backgroundImage = `url(${photos[index]})`;
    }
}
)

// image changes every 5 seconds
setInterval(() => {
    if(index === photos.length - 1) {
        index = 0;
        carousel.style.backgroundImage = `url(${photos[index]})`;
    } else {
        index++;
        carousel.style.backgroundImage = `url(${photos[index]})`;
    }
}
, 7500)

