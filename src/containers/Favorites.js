import React, { Component } from "react";
import { Container } from "flux/utils";
import Header from "../components/Header";
import FavoriteStore from "../stores/FavoriteStore";
import GridGif from "../components/GridGif";

const styles = {
  divStyle: {
    //display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
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
