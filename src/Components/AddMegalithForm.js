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
                <input name='name' value={name} onChange={e => this.handleChange(e)} placeholder='name' autoComplete="off"/>
                <input name='details' value={details} onChange={e => this.handleChange(e)} placeholder='details' autoComplete="off"/>
                <input name='image' value={image} onChange={e => this.handleChange(e)} placeholder='image URL' autoComplete="off"/>
                <button className="btn-add" onClick={this.addNewMegalith}>Add <i className="fas fa-plus-circle"></i></button>
            </div>
        )
    }
}