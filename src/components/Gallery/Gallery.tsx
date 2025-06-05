import React from "react";
import ImageSwiper from '../../components/ImageSwiper';
import './Gallery.scss';

function Gallery() {
    const images = [
        {
            imageUrl: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
            link: 'https://www.credly.com/earner/earned/badge/477d0a3b-f8f6-4f02-9306-e3e523f29ad5'
        },
        {
            imageUrl: 'https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png',
            link: 'https://www.credly.com/earner/earned/badge/47abed0b-be06-45e7-b87c-f164f38a5046'
        },
        {
            imageUrl: 'https://images.credly.com/size/680x680/images/2784d0d8-327c-406f-971e-9f0e15097003/image.png',
            link: 'https://www.credly.com/earner/earned/badge/5e8a3353-a61b-4979-bce9-64778c1560a0'
        }
    ];

    return (
        <div className="gallery-container" id="imageswiper">
            <h2>Badges</h2>
            <ImageSwiper 
            images={images} 
            autoPlayInterval={4000} 
        />
        </div>
    );
}

export default Gallery;