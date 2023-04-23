import "./Cart.css";

function Cart(params) {
    return (
        <div className="cart-outer" style={{display : (params.isVisible ? "block" : "none")}}>
        <div id="myCart" className={(params.visibleNav ? "myCart-low" : "")}>
            {params.bookCart.length ? (
                <>
                    <h1><span>Your Cart</span></h1>
                    <ul className="cartlist">
                        {params.bookCart.map((ele) => (<li>{ele}</li>))}
                    </ul>
                </>
            ) : (
                <h1>Your Cart is <span>Empty</span></h1>
            )}
        </div>
        </div>
    );
}

export default Cart;