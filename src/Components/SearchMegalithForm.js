import React, { Component } from 'react';

export default class SearchMegalithForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            megalithsToDisplay: []
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    searchMegaliths = () => {
        const {name} = this.state;
        const nameToSearch = {name};
        this.props.searchMegalithByName(nameToSearch)
    }

    render() {
        const { name } = this.state
        return (
            <div className="Search-Form">
                <input name='name' value={name} onChange={e => this.handleChange(e)} placeholder='search by name' />
                <button className="btn-search" onClick={this.searchMegaliths}>Go</button>
            </div>

        )
    }
}