import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions.js';
import { idbPromise } from '../../utils/helpers';

const ProductItem = (item) => {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    // <div className='card px-1 py-1 w-50'>
    //   <Link to={`/products/${_id}`}>
    //     <img className='product-img' alt={name} src={`/images/${image}`} />
    //     <p>{name}</p>
    //   </Link>
    //   <div>
    //     <div>{quantity} in stock</div>
    //     <span>${price}</span>
    //   </div>
    //   <button onClick={addToCart}>Add to cart</button>
    // </div>

    
    <div className='mb-1 mr-2 ml-2 catalog card column is-one-fifth is-inline-flex'>
        <div className='card-image '>
        <Link to={`/products/${_id}`}><figure class="image is-2by2"><img className='' alt={name} src={`/images/${image}`} /></figure></Link>
          <div class="card-content">
            <div class="content">
            <Link to={`/products/${_id}`}><p class="title is-5">{name}</p></Link>
             <span class="subtitle-3">${price}</span>
             <p>{quantity} in stock</p>
            </div>
          </div>
          <footer class="card-footer">
              <button class="card-footer-item button is-dark is-fullwidth" onClick={addToCart}>Add to cart</button>
            </footer>
        </div>
    </div>
  );
};

export default ProductItem;
