import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addToFavourites, removeFromFavourites, addToCart } from '../../actions/index';
import { connect } from 'react-redux';
import Star from '../../assets/SVG/star-full.svg';
import StarEmpty from '../../assets/SVG/star-empty.svg';
import Info from '../../assets/SVG/info.svg';
import Plus from '../../assets/SVG/plus.svg';
import Grid from '../../components/Grid/index';
import Card from '../../components/Card/index';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    };

    favourite = (beer) => {
        console.log(beer);
        console.log("favourite");

        let isFavourite = this.props.favourites.find((fav) => fav.id === beer.id);

        isFavourite ? this.props.actions.removeFromFavourites(beer) : this.props.actions.addToFavourites(beer);

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
              items={this.props.beers.map((beer) => {
                  let isFavourite = this.props.favourites.find((fav) => fav.id === beer.id );

                return (
                  <Card
                    star={isFavourite ? Star : StarEmpty} onClickFavourite={() => this.favourite(beer)}
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
        beers: state.data,
        favourites: state.favourites
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ addToFavourites, removeFromFavourites, addToCart }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);