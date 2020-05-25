import React, { Component } from 'react';

export default class AddMegalithForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            details: '',
            image: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    addNewMegalith = () => {
        const {name, details, image} = this.state;
        const newMegalith = {name, details, image};
        this.props.addMegalith(newMegalith);
    }

    render() {
        const {name, details, image} = this.state
        return(
            <div className="Form">
                <input name='name' value={name} onChange={e => this.handleChange(e)} placeholder='name'/>
                <input name='details' value={details} onChange={e => this.handleChange(e)} placeholder='details'/>
                <input name='image' value={image} onChange={e => this.handleChange(e)} placeholder='image URL'/>
                <button className="btn-add" onClick={this.addNewMegalith}>Add <i class="fas fa-plus-circle"></i></button>
            </div>
        )
    }
}