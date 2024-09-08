import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../types';

const initialState = {
    items: [],
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = action.payload;

            // Ensure newItem has a valid price and product fields
            if (!newItem || !newItem.price) {
                console.error("Invalid product added to the cart:", newItem);
                return state; // Skip adding to cart if price is undefined
            }

            const existingItem = state.items.find(item => item.product._id === newItem._id);

            const updatedItems = existingItem
                ? state.items.map(item =>
                    item.product._id === newItem._id ? { ...item, quantity: item.quantity + 1 } : item
                )
                : [...state.items, { product: newItem, quantity: 1 }];

            const totalPrice = updatedItems.reduce(
                (total, item) => {
                    if (!item.product || !item.product.price) return total; // Skip invalid items
                    return total + parseFloat(item.product.price) * item.quantity;
                },
                0
            );

            return { ...state, items: updatedItems, totalPrice };

        case REMOVE_FROM_CART:
            const filteredItems = state.items.filter(item => item.product._id !== action.payload);

            const newTotalPrice = filteredItems.reduce(
                (total, item) => {
                    if (!item.product || !item.product.price) return total; // Skip invalid items
                    return total + parseFloat(item.product.price) * item.quantity;
                },
                0
            );

            return { ...state, items: filteredItems, totalPrice: newTotalPrice };

        case CLEAR_CART: // Handle clearing the cart
            return { ...state, items: [], totalPrice: 0 };

        default:
            return state;
    }
};

export default cartReducer;
