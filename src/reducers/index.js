import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, ADD_TO_CART, REMOVE_BEER_FROM_CART, REMOVE_ALL_BEER_FROM_CART } from '../actions/index';
import { combineReducers } from 'redux';
import beers from '../data/beers.json';

const initialState = {
    data: beers,
    favourites: [],
    cart: []
}

const data = (state = initialState.data, action) => {
    return state;
};

const favourites = (state = initialState.favourites, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return [...state, action.beer];
        case REMOVE_FROM_FAVOURITES:
            return state.filter((fav) => fav.id !== action.beer.id);
        default:
            return state;
    }
}

const cart = (state = initialState.cart, action) => {
    var beer = action.beer;
    var beerInCart;

    switch (action.type) {
        case ADD_TO_CART:

            beerInCart = state.find((cartBeer) => cartBeer.beer.id === beer.id);

            if (beerInCart) {
                beerInCart.numInCart++;
            } else {
                state.push({
                    beer,
                    numInCart: 1
                });
            }
            return [...state];
        case REMOVE_BEER_FROM_CART:
            return state.filter((cartBeer) => cartBeer.beer.id !== beer.beer.id);
        case REMOVE_ALL_BEER_FROM_CART:
            return [];
        default:
            return state;
    }
}

const store = combineReducers({
    data,
    favourites,
    cart
})

export default store;