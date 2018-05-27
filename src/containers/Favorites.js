import React, { Component } from "react";
import { Container } from "flux/utils";

import Header from "../components/Header";
import FavoriteStore from "../stores/FavoriteStore";
import GridGif from "../components/GridGif";

const styles = {
  divStyle: {
    overflow: "hidden",
    position: "fixed",
    top: "60px",
    right: 0,
    bottom: 0,
    left: 0,
    textAlign: "center",
    backgroundColor: "black",
  }
};

class Favorites extends Component {
  static getStores() {
    return [FavoriteStore];
  }

  static calculateState() {
    const faves = FavoriteStore.getState().favorites;
    let gifs = [];
    for (const key of Object.keys(faves)) {
      gifs.push(faves[key]);
    }
    return {
      favourites: gifs
    };
  }

  render() {
    return (
      <div>
        <Header isHomePage={false} title="Favorites" />
        <div style={styles.divStyle}>
          <GridGif gifs={this.state.favourites} />
        </div>
      </div>
    );
  }
}

export default Container.create(Favorites);
