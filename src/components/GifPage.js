import React, { Component } from "react";
import request from "axios";

import Header from "./Header";
import Constants from "../constants/AppConstants";

const styles = {
    divStyle: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        textAlign: "center",
        backgroundColor: "black",
    },
    imgStyle: {
        height: "100%",
        backgroundColor: "black",
  }
};

class GifPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: {}
    };
  }

  async fetchGif(id) {
    let url = `https://api.giphy.com/v1/gifs/${this.props.match.params.id}?api_key=${Constants.API_KEY}`;

    const response = await request.get(url);
    if (response.status === 200) {
      let gif = response.data.data;
      return {
        url: gif.images.original.url,
        width: gif.images.original.width,
        height: gif.images.original.height,
        id: gif.id,
        title: gif.title
      };
    } else {
      return {};
    }
  }
  async componentWillMount() {
    const gif = await this.fetchGif();
    this.setState({ gif: gif });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Header isHomePage={false} title="Gif" />
        <div style={styles.divStyle}>
          <img src={this.state.gif.url} alt={this.state.gif.title} style={styles.imgStyle} />
        </div>
      </div>
    );
  }
}

export default GifPage;
