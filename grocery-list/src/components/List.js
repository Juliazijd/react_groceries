import React, {Component} from 'react';

import ListItem from './ListItem';

class List extends Component {
    constructor() {
        super();
        this.state = {
            groceryItems: [
                { id: 1, title: 'Bananen'},
                { id: 2, title: 'Courgette'},
                { id: 3, title: 'Humus'},
                { id: 4, title: 'Brood'},
                { id: 5, title: 'Chips'},
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const itemToAdd = event.target
        this.setState({
            title: itemToAdd.value
        })
    }

    render() {
        const groceryComponent = this.state.groceryItems.map(groceryItem => 
            <ListItem 
                title={groceryItem} 
                key={groceryItem.id}
                onClick={this.handleClick} 
            />
            )

        return (
            <div>
                <ul>
                    {groceryComponent}
                </ul>
                <ul>
                </ul>
            </div>
        );
    }
}

export default List;