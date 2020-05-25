import React, { Component } from 'react';

export default function ListItem(props) {
    return <div className="List-Item">
            <h1 className="list-name">{props.megalith.name}</h1>
            <img src={props.megalith.image} alt="Megalithic site" height="350px" width="570px" />
                <div className="details-container">
                    <p className="list-details">{props.megalith.details}</p>
                </div>
        </div>
}