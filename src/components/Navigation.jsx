import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="navigation">
            <ul className='navigation__list'>
                <li className="navigation__item">
                    <Link to='/' className="navigation__link">Home</Link>
                </li>
                <li className="navigation__item">
                    <Link to='/shop' className="navigation__link">Shop</Link>
                </li>
                <li className="navigation__item">
                    <Link to='/blog' className="navigation__link">Blog</Link>
                </li>
                <li className="navigation__item">
                    <Link to='/contact' className="navigation__link">Contact</Link>
                </li>
            </ul>
        </div>

    )
}

export default Navigation