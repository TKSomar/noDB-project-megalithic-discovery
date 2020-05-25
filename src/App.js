import React, { Component } from 'react';
import AddMegalithForm from './Components/AddMegalithForm';
import ListItem from './Components/ListItem';
import Header from './Components/Header';
import './App.css';

import data from './data/Megaliths.json';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { render } from '@testing-library/react';
import SearchMegalithForm from './Components/SearchMegalithForm';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      megaliths: [],
      userInput: '',
      isEditing: false,
    }

    this.addMegalith = this.addMegalith.bind(this);
    this.searchMegalithByName = this.searchMegalithByName.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSaveName = this.handleSaveName.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4020/api/megaliths')
    .then(res => {
      this.setState({megaliths: res.data});
    })
    .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.megaliths !== prevState.megaliths){
      console.log('Megaliths array has been updated.');
    }
  }

  addMegalith(newMegalith) {
    axios.post('http://localhost:4020/api/megaliths', newMegalith)
    .then(res => {
      this.setState({megaliths: res.data});
    })
    .catch(err => console.log(err));
  }

  saveName(id, newName) {
    const body = { newName }
    axios.put(`http://localhost:4020/api/megaliths/${id}`, body)
    .then((res) => {
      this.setState({
        megaliths: res.data,
      })
    })
    .catch(err => console.log(err))
  }

  deleteMegalith(id) {
    axios.delete(`http://localhost:4020/api/megaliths/${id}`)
    .then(res => {
      this.setState({megaliths: res.data});
    })
    .catch(err => console.log(err));
  }

  searchMegalithByName(name) {
    axios.get(`http://localhose:4020/api/megaliths/${name}`)
    .then(res => {
      this.setState({megaliths: res.data});
    })
    .catch(err => console.log(err));
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleSaveName(id, newName) {
    this.saveName(id, newName)
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    })
  }

  render() {
      const megalithsMap = this.state.megaliths.map(megalith => {
          return (
            <div className="Full-List-Item">
              <ListItem key={megalith.id} megalith={megalith} saveName={this.saveName} />
              <button className="delete-btn" onClick={() => this.deleteMegalith(megalith.id)}>Delete <i class="fas fa-trash-alt"></i></button>
              <input type="text" onChange={(e) => {this.handleChange(e)}} placeholder='New name here' />
              <button className="edit-btn" onClick={() => {
                this.saveName(megalith.id, this.state.userInput)
              }}>Save</button>
            </div>
          )
      })
  
    return <div className="App">
      <Header />
      <AddMegalithForm addMegalith={this.addMegalith} />
      <div className="List">{megalithsMap}</div>
    </div>
  }
}