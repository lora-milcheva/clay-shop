import { useEffect, useState } from "react";
import { Rating as ReactRating } from 'react-simple-star-rating'

const RatingStars = (props) => {
    const { isReadonly, ratingValue, allowFraction, sendData} = props
    const [rating, setRating] = useState(0)

    useEffect(() => {
        setRating(ratingValue)
    }, [ratingValue])

    const handleRatingClick = (rate) => {
        setRating(rate)
        sendData(rate)
    }

    return (
        <ReactRating
            initialValue={rating}
            onClick={handleRatingClick}
            fillStyle={{ color: "#EDA3B5" }}
            emptyColor='#C7C7CC'
            readonly={isReadonly}
            allowFraction={allowFraction}
            size={22}
        />
    )
}

export default RatingStars