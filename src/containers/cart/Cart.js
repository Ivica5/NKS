import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { removeBeerFromCart, removeAllBeerFromCart } from '../../actions/index';
import { connect } from 'react-redux';
import Table from '../../components/Table/index';
import Button from '../../components/Button/index';

class Cart extends Component {

    removeBeerFromCart = (beer) => {
        console.log(beer);
        console.log("RemovedBeer");
        this.props.actions.removeBeerFromCart(beer);
    }

    removeAllFromCart = () => {
        console.log("removed");
        this.props.actions.removeAllBeerFromCart();
    }

    render() {
        return (
            <React.Fragment>
              <Table
                columns = {[
                  {
                    header:"Image"
                  },
                  {
                    header:"Beer name"
                  },
                  {
                    header:"Quantity"
                  }
                ]}
                data={this.props.cart.map((beer) => {
                    return {
                      image: beer.beer.image_url,
                      name: beer.beer.name,
                      quantity: beer.numInCart,
                      removeAction: () => this.removeBeerFromCart(beer)
                    }
                })}
              />
              <div style={{marginLeft: "2%" }}>
                <Button
                  text= "Remove all from cart"
                  click = {() => this.removeAllFromCart()}
                />
              </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ removeBeerFromCart, removeAllBeerFromCart }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);