import Navigation from "./partials/Navigation";
import TopHeader from "./partials/TopHeader";

const Header = () => {
    return (
        <div className='header'>
            <TopHeader />
            <Navigation />
        </div>
    )
}

export default Header