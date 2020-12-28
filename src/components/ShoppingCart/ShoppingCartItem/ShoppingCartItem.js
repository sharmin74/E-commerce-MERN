import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import './ShoppingCartItem.css';


function CartItem({id, src, name, price}) {
    console.log(id);
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }
    const checkItem = () => {
    }
    return (
        <div className='cartItem'>
            <div className='cartItem__img'>
                <img src={src} alt=""/>
            </div>
            <div className='cartItem__data'>
                <p>{name}</p>
                <CurrencyFormat
            renderText={(value) => (
                <>
                     <p>{value}</p>
                </>
            )}
            decimalScale = {2}
            value={price}
            displayType = {'text'}
             thousandSeparator={true} 
             prefix={'₹ '} 
             />
            </div>
            <div className='cartItem__counter'>
                <span><button>-</button></span>
                <span>{}</span>
                <span> <button>+</button></span>
            </div>
            <div className='cartItem__btn'>
                <button onClick={removeFromBasket}> 
                    Delete Item
                </button>
            </div>
        </div>
    )
}
 
export default CartItem;
