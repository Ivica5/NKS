export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_BEER_FROM_CART = 'REMOVE_BEER_FROM_CART';
export const REMOVE_ALL_BEER_FROM_CART = 'REMOVE_ALL_BEER_FROM_CART';

export const addToFavourites = (beer) => {
    console.log("ADDED_TO_FAVOURITES: " + beer);
    return {
        type: ADD_TO_FAVOURITES,
        beer: beer
    }
};

export const removeFromFavourites = (beer) => {
    console.log("REMOVED_FROM_FAVOURITES: " + beer);
    return {
        type: REMOVE_FROM_FAVOURITES,
        beer: beer
    }
};

export const addToCart = (beer) => {
    console.log("ADDED_TO_CART: " + beer);
    return {
        type: ADD_TO_CART,
        beer: beer
    }
};

export const removeBeerFromCart = (beer) => {
    console.log("REMOVED_BEER_FROM_CART: " + beer);
    return {
        type: REMOVE_BEER_FROM_CART,
        beer: beer
    }
};

export const removeAllBeerFromCart = () => {
    console.log("REMOVED_ALL_BEER_FROM_CART:" );
    return {
        type: REMOVE_ALL_BEER_FROM_CART
    }
};

