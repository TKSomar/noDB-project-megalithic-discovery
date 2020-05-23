import React, { Component } from 'react';
import List from './Components/List';
import Header from './Components/Header';

import data from './data/Megaliths.json';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      megaliths: {data},
      megalithsToDisplay: {}
    }
  }

  getAllMegaliths() {
    axios.get('http://localhost:4020/api/megaliths').then( results => {
      toast.success('Successfully showing all megaliths.');
      this.setState({ 'megalithsToDisplay': results.data });
    }).catch( () => toast.error('Failed to fetch all megaliths.') );
  }

  render() {
    console.log(this.state.apiResponse)
    return <div className="App">
      <Header />
      <List />
    </div>
  }
}