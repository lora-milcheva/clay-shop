import Navigation from "../../navigation/Navigation";
import { FOOTER_INFO, FOOTER_TEXT } from "../../../data/footer-info";
import FooterLinksBlock from "./FooterLinksBlock";

const Footer = () => {
    return (
        <div className='footer'>
            <Navigation/>
            <div className='footer__bottom'>
                <div className='footer__info'>
                    <div className='footer__logo'>
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M11.9167 21.754C16.3711 21.284 19.8875 17.4261 20.1508 12.6397H11.9167V21.754ZM21.9868 12.6397H22V12.0625V0.375L11 0.375001C4.92486 0.375002 -5.31105e-07 5.60767 0 12.0625C5.31105e-07 18.5173 4.92486 23.75 11 23.75C16.893 23.75 21.7036 18.8263 21.9868 12.6397ZM11 2.32292C5.93739 2.32292 1.83333 6.68347 1.83333 12.0625C1.83333 17.1128 5.45112 21.2653 10.0833 21.754V10.6918H20.1667V2.32292H11Z"
                                  fill="#1B2437"/>
                        </svg>Clay Shop
                    </div>
                    <p className='footer__text'>{FOOTER_TEXT}</p>
                </div>
                <div className='footer__links'>
                    {FOOTER_INFO.map(el => <FooterLinksBlock data={el} key={el.name}/>)}
                </div>
            </div>
        </div>
    )
}

export default Footer