import React, { Component } from "react";
import request from "superagent";

import Header from "../components/Header";
import Constants from "../constants/AppConstants";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import FavIcon from "@material-ui/icons/FavoriteBorder";

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

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }

  getgifs() {
    let self = this;
    let url = `http://api.giphy.com/v1/gifs/trending?api_key=${Constants.API_KEY}&limit=24`;

    request
      .get(url)
      .accept("json")
      .end(function(err, response) {
        if (response.body.meta.status === 200) {
          let gifs = response.body.data.map(gif => {
            return {
              url: gif.images.downsized.url,
              id: gif.id,
              title: gif.title,
              featured: false,
              titleVisible: false
            };
          });
          self.setState({ gifs: gifs });
        }
      });
  }

  componentWillMount() {
    this.getgifs();
  }

  render() {
    return (
      <div>
        <Header title="GiphyLand" />
        <div style={styles.divStyle}>
          <GridList spacing={0} cols={4} style={styles.gridListStyle}>
            {this.state.gifs.map((gif, idx) => (
              <GridListTile
                onMouseEnter={() => {
                  const gifs = this.state.gifs.slice();
                  gifs[idx].titleVisible = true;
                  this.setState({ gifs: gifs });
                }}
                onMouseLeave={() => {
                  let gifs = this.state.gifs.slice();
                  gifs[idx].titleVisible = false;
                  this.setState({ gifs: gifs });
                }}
                key={gif.id}
                cols={gif.featured ? 2 : 1}
                rows={gif.featured ? 2 : 1}
              >
                <img src={gif.url} alt={gif.title} />
                <GridListTileBar
                  title={gif.titleVisible ? gif.title : null}
                  titlePosition="top"
                  actionIcon={
                    <IconButton style={styles.iconStyle}>
                      <FavIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                  style={styles.titleBarStyle}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

export default MainPage;
