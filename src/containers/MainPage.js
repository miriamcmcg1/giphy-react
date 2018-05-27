import React, { Component } from "react";
import { Debounce } from 'react-throttle';
import request from "axios";

import Header from "../components/Header";
import Constants from "../constants/AppConstants";
import GridGif from "../components/GridGif";

const styles = {
  divStyle: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  }
};

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  async fetchSearchGifs(query) {
    let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${Constants.API_KEY}&limit=24`;

    const response = await request.get(url);
    if (response.status === 200) {
      let gifs = response.data.data.map(gif => {
        return {
          url: gif.images.downsized.url,
          id: gif.id,
          title: gif.title,
          titleVisible: false
        };
      });

      return gifs;
    } else {
      return [];
    }
  }

  async fetchTrendingGifs() {
    let url = `http://api.giphy.com/v1/gifs/trending?api_key=${Constants.API_KEY}&limit=24`;

    const response = await request.get(url);
    if (response.status === 200) {
      let gifs = response.data.data.map(gif => {
        return {
          url: gif.images.downsized.url,
          id: gif.id,
          title: gif.title,
          titleVisible: false
        };
      });

      return gifs;
    } else {
      return [];
    }
  }

  async onSearchChange(query) {
    if(!query) {
      const gifs = await this.fetchTrendingGifs();
      this.setState({gifs: gifs});
    } else {
      const gifs = await this.fetchSearchGifs(query);
      this.setState({gifs: gifs});
    }
  }

  async componentWillMount() {
    if (this.state.gifs.length === 0) {
      const gifs = await this.fetchTrendingGifs();
      this.setState({gifs: gifs})
    }
  }

  render() {
    return (
      <div>
        <Debounce time="150" handler="onSearchChange">
          <Header title="GiphyLand" isHomePage={true} onSearchChange={query => this.onSearchChange(query)} />
        </Debounce>
        <div style={styles.divStyle}>
          <GridGif gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default MainPage;
