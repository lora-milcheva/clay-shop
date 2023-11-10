import Navigation from "./Navigation";
import { FOOTER_INFO, FOOTER_TEXT } from "../data/footerInfo";
import FooterLinksBlock from "./FooterLinksBlock";

const Footer = () => {
    return (
        <div className='footer'>
            <Navigation/>
            <div className='footer__bottom'>
                <div className='footer__info'>
                    <p>Clay Shop</p>
                    <p>{FOOTER_TEXT}</p>
                </div>
                <div className='footer__links'>
                    {FOOTER_INFO.map(el => <FooterLinksBlock data={el}/>)}
                </div>
            </div>

        </div>
    )
}

export default Footer