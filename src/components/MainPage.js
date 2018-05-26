import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Header from './Header';
import SampleStore from '../stores/SampleStore';


class MainPage extends Component {
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
            <Header title="GiphyLand" />
        </div>
        );
    }
}

export default Container.create(MainPage);
