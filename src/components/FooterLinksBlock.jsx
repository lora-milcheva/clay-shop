import { Link } from "react-router-dom";

const FooterLinksBlock = (props) => {
    const { name, links } = props.data

    return (
        <div className='footer__links-block'>
            <h4 className='footer__links-block--name'>{name}</h4>
            <ul className='footer__links-block--list'>
                {links.map(link =>
                    <li className='footer__links-block--item'>
                        <Link to={link.url} className='footer__links-block--link'>{link.text}</Link>
                    </li>
                )}
            </ul>
        </div>

    )
}

export default FooterLinksBlock