import "./Card.css";

function Card(params) {
    let bookTitle = params.book.title;
    let bookPrice = params.book.price;
    let bookDescription = params.book.description;
    let bookImg = `${process.env.PUBLIC_URL}/imgs/${params.book.img}`;
    let bookAuthor = params.book.author;

    const addtocart = (title) => {
        let bookCart = params.bookCart.slice();
        if (bookCart.some((ele) => {return ele===title})) {
            bookCart = bookCart.filter((ele) => { return (ele !== title) });
        } else {
            bookCart.push(title);
        }
        params.setBookCart(bookCart);

        if (!params.CartDisplay.isVisible){
            params.CartDisplay.setIsVisible(true);
        }
    }

    let carted = params.bookCart.some((ele) => {return ele===bookTitle}) ? "carted" : "atc";

    return (
        <div className="bookcard">
            <div className="bookcard-inner">
                <div className="frontside-bookcard">
                    <div className="bookimg"><img src={bookImg} /></div>
                    <div className="booktitle">
                        <h2>{bookTitle}</h2>
                        <h4>{bookAuthor}</h4>
                    </div>
                </div>
                <div className="backside-bookcard">
                    <p className="book-description">{bookDescription}</p>
                    <h2 className="book-price">Rs. {bookPrice}</h2>
                    <button className={`add-to-cart ${carted}`} onClick={() => addtocart(bookTitle)}></button>
                </div>
            </div>
        </div>
    );
}

export default Card;