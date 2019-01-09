import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Icon from "../../components/Icon";
import Nav from "../../components/Nav";
import Main from '../main/Main';
import Favourites from '../favourites/Favourites';
import Cart from '../cart/Cart';
import GitHub from '../../assets/SVG/github.svg';
import Instagram from '../../assets/SVG/instagram.svg';
import Twitter from '../../assets/SVG/twitter.svg';
import Facebook from '../../assets/SVG/facebook.svg';
import './styles.css';

class App extends Component {
    render() {
        return (
            <div className="app">
            <Header
              image="https://image.flaticon.com/icons/png/512/164/164232.png"
              title="Beer shop"/>
            <div className="container">
              <div className="main">
                <Switch>
                  <Route exact path="/" render={() => (
                    <Redirect to="/home" />
                  )} />
                  <Route path="/home" component={Main} />
                  <Route path="/favourites" component={Favourites} />
                  <Route path="/shopping_cart" component={Cart} />
                  <Route component={Main} />
                </Switch>
              </div>
              <div className="navigation">
                <Nav nav={[
                    {
                      label: "Home",
                      path: "/home"
                    },
                    {
                      label: `Favorites (${this.props.numOfFavourites})`,
                      path: "/favourites"
                    },
                    {
                      label: `Shopping Cart (${this.props.numInCart})`,
                      path: "/shopping_cart"
                    },
                    {
                      label: "About",
                      path: "/about"
                    },
                    {
                      label: "Source Code",
                      path: "/source_code"
                    }
                  ]}
                />
                <Footer>
                  <Icon
                    href="http://twitter.com"
                    img={Twitter}
                    text="Twitter"
                  />
                  <Icon
                    href="http://facebook.com"
                    img={Facebook}
                    text="Facebook"
                  />
                  <Icon
                    href="http://github.com"
                    img={GitHub}
                    text="GitHub"
                  />
                  <Icon
                    href="http://instagram.com"
                    img={Instagram}
                    text="Instagram"
                    />
                </Footer>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let numInCart = 0;
    state.cart.forEach(beer => numInCart += beer.numInCart);

    return {
        numOfFavourites: state.favourites.length,
        numInCart: numInCart,
    };
}

export default withRouter(connect(mapStateToProps)(App));