import React, { Component } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBar from "material-ui-search-bar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Favorite from "@material-ui/icons/Favorite";
import Home from "@material-ui/icons/Home"

const styles = {
  divStyle: {
    flexGrow: 1,
    top: "0px",
    marginBottom: "0px",
    height: "60px"
  },
  TypographyStyle: {
    flex: 1,
    textDecoration: "none"
  },
  IconButtonStyle: {
    marginLeft: -12,
    marginRight: 20
  },
  IconStyle: {
    color: "white",
    fontSize: "30px"
  },
  AppBarStyle: {
    height: "60px",
    backgroundColor: "black",
    zIndex: 1201,
    position: "absolute",
    top: 0,
    marginBottom: "0px"
  },
  SearchBarStyle: {
    maxWidth: 800,
    width: 300,
    position: "absolute",
    zIndex: 15,
    top: "50%",
    left: "50%",
    margin: "-26px 0px 0px -170px",
    borderRadius: "27px",
    color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  }
};

class Header extends Component {
  render() {
    const renderIcon = this.props.isHomePage ?
    (<IconButton component={Link} to="/favorites" color="secondary" style={styles.IconButtonStyle}>
        <Favorite style={styles.IconStyle} />
      </IconButton>) : (
      <IconButton component={Link} to="/" color="secondary" style={styles.IconButtonStyle}>
        <Home style={styles.IconStyle} />
      </IconButton>
      )
    return (
      <div style={styles.divStyle}>
        <AppBar position="absolute" style={styles.AppBarStyle}>
          <Toolbar>
            <Typography color="inherit" variant="title" style={styles.TypographyStyle}>
              {this.props.title}
            </Typography>
            {this.props.isHomePage ?  
            (<SearchBar
              onChange={query => this.props.onSearchChange(query)}
              onRequestSearch={(result) => console.log(result)}
              style={styles.SearchBarStyle}/>) : (null)}
            {renderIcon}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func,
  isHomePage: PropTypes.bool.isRequired
};

export default Header;
