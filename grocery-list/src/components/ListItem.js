import React from 'react';

function ListItem(props) {
    const item = props.title;
    return(
        <li key={item.id}
            onClick={props.onClick}>{item.title}</li>
    )
}

export default ListItem;