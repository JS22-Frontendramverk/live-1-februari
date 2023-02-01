import './Header.css';

import Cart from "../Cart/Cart";

function Header(props) {
    const { numberOfProducts } = props;
    return (
        <header className='header'>
            <Cart numberOfProducts={ numberOfProducts } />
        </header>
    )
}

export default Header;