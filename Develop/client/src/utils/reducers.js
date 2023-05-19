import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_CART,
  UPDATE_QUANTITY_CART,
  REMOVE_CART,
  ADD_MANY_CART,
  CATEGORIES_UPDATE,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  ACTIVATE_CART,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };
    case ADD_MANY_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    case UPDATE_QUANTITY_CART:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case REMOVE_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case ACTIVATE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case CATEGORIES_UPDATE:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
