import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Header from './Header';
import SampleStore from '../stores/SampleStore';

class Favorites extends Component {
    static getStores() {
        return [SampleStore];
      }
    
      static calculateState() {
        return {
          sample: SampleStore.getState()
        };
      }

    render() {
        return (
        <div>
            <Header isHomePage={false} title="Favorites"/>
        </div>
        );
    }
}

export default Container.create(Favorites);
