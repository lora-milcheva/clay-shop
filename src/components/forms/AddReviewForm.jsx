import { useState } from "react";
import RatingStars from "../ui/productPage/RatingStars";

const AddReviewForm = () => {
    const [authorValue, setAuthorValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [textValue, setTextValue] = useState('')
    let ratingValue = 4


    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(authorValue)
        console.log(emailValue)
        console.log(textValue)
        console.log(ratingValue);
    }

    const getData = (value) => {
        ratingValue = value
    }

    return (
        <div className='form'>

            <form className='add-review-form' onSubmit={handleFormSubmit}>

                <RatingStars isReadonly={false}
                             ratingValue={ratingValue}
                             sendData={getData}/>

                <div className='cols'>
                    <div className='input-container'>
                        <label htmlFor='author'>Name</label>
                        <input id='author'
                               type='text'
                               className='input'
                               value={authorValue}
                               onChange={(e) => setAuthorValue(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='email'>Email</label>
                        <input id='email'
                               type='email'
                               className='input'
                               value={emailValue}
                               onChange={(e) => setEmailValue(e.target.value)}/>
                    </div>
                </div>

                <div className='input-container'>
                    <label htmlFor='text'>Message</label>
                    <textarea id='text'
                              className='input'
                              rows={10}
                              value={textValue}
                              onChange={(e) => setTextValue(e.target.value)}/>
                </div>

                <button className='btn btn--primary-light' onClick={(e) => handleFormSubmit(e)}>Add review</button>
            </form>
        </div>
    )
}

export default AddReviewForm