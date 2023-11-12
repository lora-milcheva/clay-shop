import Navigation from "../../navigation/Navigation";
import TopHeader from "./TopHeader";

const Header = () => {
    return (
        <div className='header'>
            <TopHeader />
            <Navigation />
        </div>
    )
}

export default Header