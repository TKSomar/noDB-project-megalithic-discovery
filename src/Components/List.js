import React, { Component } from 'react';
import ListItem from './ListItem';
import data from '../data/Megaliths.json';

export default class List extends Component {
    constructor() {
        super();

        this.state = {
            megaliths: data
        }
    }

    render () {
        const megalithsMap = this.state.megaliths.map(megalith => {
            return <ListItem key={megalith.id} megalith={megalith} />
        })
        return <div>{megalithsMap}</div>
    }
}