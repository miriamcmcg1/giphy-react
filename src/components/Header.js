import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchBar from 'material-ui-search-bar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import Favorite from '@material-ui/icons/Favorite';

const styles = {
  divStyle: {
    flexGrow: 1,
  },
  TypographyStyle: {
    flex: 1,
    textDecoration: 'none',
    color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  IconButtonStyle: {
    marginLeft: -12,
    marginRight: 20,
  },
  IconStyle: {
    color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  AppBarStyle: {
    backgroundColor: 'black', 
    zIndex:1201, 
    position: 'absolute', 
    top: 0
  },
  SearchBarStyle: {
    maxWidth: 800,
    width: 300,
    position: 'absolute',
    zIndex: 15,
    top: '50%',
    left: '50%',
    margin: '-24px 0px 0px -170px'
  }
};

class Header extends Component {
    render() {
        return (
        <div style={styles.divStyle}>
            <AppBar position="absolute" style={styles.AppBarStyle}>
                <Toolbar>
                    <Typography color='inherit' component={Link} to="/" variant="title" style={styles.TypographyStyle}>
                        {this.props.title}
                    </Typography>
                    <SearchBar
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={styles.SearchBarStyle}/>
                    <IconButton component={Link} to="/favorites" color="secondary" style={styles.IconButtonStyle} >
                        <Favorite style={styles.IconStyle} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
        );
      }
    }
    
    Header.propTypes = {
      title: PropTypes.string.isRequired,
    }
    

export default Header;