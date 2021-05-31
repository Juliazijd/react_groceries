import React from "react";

import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

function Container () {
    return (
        <div>
            <h1>Julia's Boodschappenlijst</h1>
            <GroceryList />
            <ShoppingCart />
        </div>
    )
}

export default Container;