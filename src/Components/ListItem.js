import React from 'react';

function ListItem(props) {
    return <div className="List-Item">
        <h1 className="list-title">{props.megalith.name}</h1>
        <img className="list-image" alt="Megalithic site" src={props.megalith.image} height="250px" width="369px" />
        <h2 className="list-details-title">Details</h2>
        <p className="list-details">{props.megalith.details}</p>
    </div>
}

export default ListItem;