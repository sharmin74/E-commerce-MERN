import React from 'react';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';
import './ShoppingCart.css';
import { useStateValue } from '../../StateProvider';
import SubTotal from './SubTotal/SubTotal';

function ShoppingCart() {
    const [{basket}, dispatch] = useStateValue();
    // console.log('rendered basket>>', basket);
    // const filteredArray = basket.filter(item => item.id.length !== 1)
    // const unique = [...new Set(basket.map(item => item))];
    
    const unique = basket.filter((item, index, basket) => {
        return basket.indexOf(item) == index;
    });
    console.log('UNIQUE >>', unique);
    return (
        <div className='shopping-cart'>
            {basket.map((item) => {
                // console.log('item >>>', item);
               return <ShoppingCartItem 
                key = {item.id}
                id = {item.id}
                src = {item.src}
                name = {item.name}
                price ={item.price}
            />
            })}
            <br/> <br/>
            <SubTotal />
        </div>
    )
}

export default ShoppingCart
