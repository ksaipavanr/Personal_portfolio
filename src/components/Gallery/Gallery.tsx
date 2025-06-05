import React from "react";
import ImageSwiper from '../../components/ImageSwiper';
import './Gallery.scss';

function Gallery() {
    const images = [
        {
            imageUrl: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
            link: 'https://www.credly.com/earner/earned/badge/0ed21702-b8f0-49ad-9629-0fbe13455ae6'
        },
        {
            imageUrl: 'https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png',
            link: 'https://www.credly.com/earner/earned/badge/ad8f70e7-273b-45ee-8601-a3419a9affc3'
        },
        {
            imageUrl: 'https://images.credly.com/size/680x680/images/2784d0d8-327c-406f-971e-9f0e15097003/image.png',
            link: 'https://www.credly.com/earner/earned/badge/adb1e87a-4453-43ad-ba52-285d67c8770b'
        },
        {
            imageUrl: 'https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png',
            link: 'https://www.credly.com/earner/earned/badge/50a0f5d5-10c0-47e1-9a57-fa783fc18732'
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