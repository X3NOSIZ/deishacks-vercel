const url = `https://deishacks-image-production.up.railway.app`;

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

// prevBtn.addEventListener('click', ()=> {
//     if(index === 0) {
//         index = photos.length - 1;
//         carousel.style.backgroundImage = `url(${photos[index]})`
//     } else {
//         index--;
//         carousel.style.backgroundImage = `url(${photos[index]})`
//     }
// })

// nextBtn.addEventListener('click', ()=> {
//     if(index === photos.length - 1) {
//         index = 0;
//         carousel.style.backgroundImage = `url(${photos[index]})`;
//     } else {
//         index++;
//         carousel.style.backgroundImage = `url(${photos[index]})`;
//     }
// })

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
, 5000)

