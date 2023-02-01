import './Product.css';

function Product(props) {
    const { book, addToCart } = props;
    console.log(book);
    return (
        <article className='product'>
            <h2>{ book.title }</h2>
            <h3>{ book.author }</h3>
            <p>{ book.text }</p>
            <button className='product__button'
                onClick={ () => { addToCart(book) } }>Add to cart</button>
        </article>
    )
}

export default Product;