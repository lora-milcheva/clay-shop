import { useState, useEffect, useRef } from "react";

const ProductGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState();
    const selectedImageRef = useRef()

    useEffect(() => {
        setSelectedImage(images[0])
    }, [images])

    const handleThumbnailClick = (imageUrl) => {
        const image = selectedImageRef.current

        window.requestAnimationFrame(() => {
            image.style.opacity = 0
        });

        setTimeout(() => {
            setSelectedImage(imageUrl)
        }, 250)

        setTimeout(() => {
            window.requestAnimationFrame(() => {
                image.style.opacity = 1
            });
        }, 300)
    }


    return (
        <div className='gallery'>
            <div className='gallery__selected' ref={selectedImageRef}>
                <img src={selectedImage} alt="product"/>
            </div>
            <div className='gallery__thumbnails'>
                {images.map((imageUrl, index) => {

                    const style = imageUrl === selectedImage ? "gallery__thumbnail selected" : "gallery__thumbnail"
                    return (
                        <div className={style} key={imageUrl} onClick={() => handleThumbnailClick(imageUrl)}>
                            <img src={imageUrl} alt="product"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductGallery