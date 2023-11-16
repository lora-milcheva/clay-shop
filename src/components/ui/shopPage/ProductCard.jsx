import { Link } from "react-router-dom";

const ProductCard = (props) => {

    const { id, name, price, images } = props.product

    return (
        <Link to={'/shop/' + id} className='card'>
            <div className='card__image'>
                <img src={images[0]} alt='product picture' />
            </div>

            <div className='card__info'>
                <h4 className='card__title'>
                    {name}
                </h4>

                <div className='card__price'>
                    $ {Number(price).toFixed(2)}
                </div>
            </div>

            <div className='card__cta'>
                <button className='btn btn--secondary'>View</button>
            </div>
        </Link>
    )

}

export default ProductCard