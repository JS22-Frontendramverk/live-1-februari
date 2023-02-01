import './Cart.css';

function Cart(props) {
    const { numberOfProducts } = props;
    return (
        <section className='cart'>
            <a href="" className='cart__link'>Cart</a>
            <span className='cart__counter'>{ numberOfProducts }</span>
        </section>
    )
}

export default Cart;