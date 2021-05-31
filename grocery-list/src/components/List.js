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
        itemToAdd.remove();
        this.setState({
            title: itemToAdd.innerHTML
        })
    }

    render() {
        const groceryItemComponent = this.state.groceryItems.map(groceryItem => 
            <ListItem 
                title={groceryItem} 
                key={groceryItem.id}
                onClick={this.handleClick} 
            />
            )
            console.log(this.state);
        // const shoppingCartItems = this.state.groceryItems.map(groceryItem => {
        //     if (groceryItem.title === this.state.title) {
        //         return ( 
        //             <ListItem 
        //                 title={this.state.title} 
        //                 key={groceryItem.id}
        //             />
        //         )
        //     }
        //     console.log(groceryItem)
            
        // })

        return (
            <div>
                <ul>
                    {groceryItemComponent}
                </ul>
            </div>
        );
    }
}

export default List;