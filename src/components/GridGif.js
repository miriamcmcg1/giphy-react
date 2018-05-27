import React, { Component } from "react";
import SampleActionCreators from "../actions/SampleActionCreators";
import SampleStore from "../stores/SampleStore";

import PropTypes from "prop-types";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import FavIcon from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

const styles = {
  divStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridListStyle: {
    width: "100%",
    transform: "translateZ(0)"
  },
  titleBarStyle: {
    background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  iconStyle: {
    color: "white"
  }
};

class GridGif extends Component {

  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    const faves = SampleStore.getState().favorites;
    let gifs = [];
    for (const key of Object.keys(faves)) {
      gifs.push(faves[key]);
    }
    console.log(gifs);
    return {
      favourites: gifs
    };
  }

  setTitleVisible(idx, visible) {
    const gifs = this.props.gifs.slice();
    gifs[idx].titleVisible = visible;
    this.forceUpdate();
  }

  setFavorite(idx, gif) {
    const gifs = this.props.gifs.slice();
    gifs[idx].favorite = !gifs[idx].favorite;
    this.forceUpdate();  
    if(gifs[idx].favorite)
      SampleActionCreators.AddFavourite(gif);
    else 
      SampleActionCreators.RemFavourite(gif);
  }

  render() {
    return (
      <div>
        <GridList spacing={0} cols={4} style={styles.gridListStyle}>
          {this.props.gifs.map((gif, idx) => (
            <GridListTile
              onMouseEnter={() => this.setTitleVisible(idx, true)}
              onMouseLeave={() => this.setTitleVisible(idx, false)}
              key={gif.id}
              cols={1}
              rows={1}
            >
              <img src={gif.url} alt={gif.title} />
              <GridListTileBar
                title={gif.titleVisible ? gif.title : null}
                titlePosition="top"
                actionIcon={
                  <IconButton onClick={() => this.setFavorite(idx, gif)} style={styles.iconStyle}>
                    {gif.favorite ? (<Favorite/>) : (<FavIcon/>)}
                  </IconButton>
                }
                actionPosition="left"
                style={styles.titleBarStyle}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

GridGif.propTypes = {
  gifs: PropTypes.array.isRequired
};

export default GridGif;
