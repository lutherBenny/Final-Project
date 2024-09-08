import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../types';

// Action to add an item to the cart
export const addToCart = (product) => (dispatch, getState) => {
    if (!product || !product._id) {
        console.error('Invalid product:', product); // Log if product is invalid
        return;
    }

    const price = typeof product.price === 'string'
        ? parseFloat(product.price.replace(/[^0-9.]/g, ''))
        : product.price;

    product.price = price;

    dispatch({ type: ADD_TO_CART, payload: product });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
};

// Action to remove an item from the cart
export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
};

// Action to clear the cart
export const clearCart = () => (dispatch) => {
    dispatch({ type: CLEAR_CART });
    localStorage.removeItem('cartItems');
};
