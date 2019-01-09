import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addToCart, removeFromFavourites } from '../../actions/index';
import { connect } from 'react-redux';
import Star from '../../assets/SVG/star-full.svg';
import Info from '../../assets/SVG/info.svg';
import Plus from '../../assets/SVG/plus.svg';
import Grid from '../../components/Grid/index';
import Card from '../../components/Card/index';

class Favourites extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    };

    removeFavourite = (beer) => {
        console.log(beer);
        console.log("removedFavourite");
        this.props.actions.removeFromFavourites(beer);
    }

    addToCart = (beer) => {
        console.log(beer);
        console.log("addToCart");
        this.props.actions.addToCart(beer);
    }

    beerInfo = (beer) => {
        console.log(beer);
        console.log("beerInfo");
    }

    render() {

        return (
            <Grid
          items={this.props.favourites.map((beer) => {

            return (
              <Card
                star={Star} onClickFavourite={() => this.removeFavourite(beer)}
                cart={Plus} onClickCart={() => this.addToCart(beer)}
                info={Info} onClickInfo={() => this.beerInfo(beer)}
                image={beer.image_url}
                title={beer.name}
                description={beer.description}
              />
        )
    })
}
/>
);
}
}

const mapStateToProps = (state) => {
    return {
        favourites: state.favourites
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ addToCart, removeFromFavourites }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);