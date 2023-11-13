import { useParams } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { addReview } from "../../data/ProductData";

import RatingStars from "../ui/productPage/RatingStars";
import useProduct from "../../hooks/useProduct";


const AddReviewForm = () => {
    const { id } = useParams()

    const {setSelectedProduct} = useProduct()

    let ratingValue = 4
    const getRatingData = (value) => {
        ratingValue = value
    }


    // NAME INPUT
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '')

    // EMAIL INPUT
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'))


    // MESSAGE INPUT
    const {
        value: enteredMessage,
        isValid: enteredMessageIsValid,
        hasError: messageInputHasError,
        valueChangeHandler: messageChangedHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessageInput
    } = useInput()


    // FORM VALIDITY
    let formIsValid = false
    if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true


    // SUBMIT
    const formSubmissionHandler = event => {
        event.preventDefault()
        if (!formIsValid) return

        const review = {
            author: enteredName,
            email: enteredEmail,
            message: enteredMessage,
            rating: ratingValue
        }

        const saveReview = async () => {
            const result = await addReview(id, review)
            console.log(result)
            setSelectedProduct(result)
        }

        saveReview()


        // resetNameInput()
        // resetEmailInput()
        // resetMessageInput()
    }

    const nameInputStyle = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputStyle = emailInputHasError ? 'form-control invalid' : 'form-control'
    const messageInputStyle = messageInputHasError ? 'form-control invalid' : 'form-control'

    return (
        <div className='form'>
            <form className='add-review-form' onSubmit={formSubmissionHandler}>

                <RatingStars isReadonly={false}
                             ratingValue={ratingValue}
                             sendData={getRatingData}/>

                <div className='cols'>
                    <div className={nameInputStyle}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text'
                               id='name'
                               value={enteredName}
                               onChange={nameChangedHandler}
                               onBlur={nameBlurHandler}/>
                        {nameInputHasError && <p className='error-text'>Name must not be empty!</p>}
                    </div>

                    <div className={emailInputStyle}>
                        <label htmlFor='name'>Email</label>
                        <input type='email'
                               id='email'
                               value={enteredEmail}
                               onChange={emailChangedHandler}
                               onBlur={emailBlurHandler}/>
                        {emailInputHasError && <p className='error-text'>Invalid email!</p>}
                    </div>
                </div>

                <div className={messageInputStyle}>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        id='message'
                        rows={5}
                        value={enteredMessage}
                        onChange={messageChangedHandler}
                        onBlur={messageBlurHandler}/>
                </div>

                <button className='btn btn--primary-light' disabled={!formIsValid}>Add review</button>
            </form>
        </div>
    )
}

export default AddReviewForm