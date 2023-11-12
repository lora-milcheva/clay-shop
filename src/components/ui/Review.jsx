import { useEffect, useState } from "react";
import { Rating as ReactRating } from 'react-simple-star-rating'

const Rating = ({ isReadonly, ratingValue }) => {
    const [rating, setRating] = useState(0)

    useEffect(() => {
        setRating(ratingValue)
    }, [ratingValue])

    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <ReactRating
            initialValue={rating}
            onClick={handleRating}
            fillStyle={{ color: "#EDA3B5" }}
            emptyColor='#C7C7CC'
            readonly={isReadonly}
            allowFraction={true}
            size={22}
        />
    )
}

export default Rating