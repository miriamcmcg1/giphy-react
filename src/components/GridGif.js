import React, { Component } from "react";
import SampleActionCreators from "../actions/SampleActionCreators";
import FavoriteStore from "../stores/FavoriteStore";

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
  constructor(props) {
    super(props);
    this.state = {
      favorites: FavoriteStore.getState().favorites
    }
  }

  setTitleVisible(idx, visible) {
    const gifs = this.props.gifs.slice();
    gifs[idx].titleVisible = visible;
    this.forceUpdate();
  }

  setFavorite(gif) {
    if (!(gif.id in this.state.favorites))
      SampleActionCreators.AddFavourite(gif);
    else
      SampleActionCreators.RemFavourite(gif);
    this.forceUpdate();
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
                  <IconButton onClick={() => this.setFavorite(gif)} style={styles.iconStyle}>
                    {(gif.id in this.state.favorites) ? <Favorite /> : <FavIcon />}
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
