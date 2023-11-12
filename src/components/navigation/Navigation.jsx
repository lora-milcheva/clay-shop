import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="navigation">
            <ul className='navigation__list'>
                <li className="navigation__item">
                    <NavLink to='/' className="navigation__link" active='true'>Home</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to='/shop' className="navigation__link" >Shop</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to='/blog' className="navigation__link">Blog</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to='/contact' className="navigation__link">Contact</NavLink>
                </li>
            </ul>
        </div>

    )
}

export default Navigation