import React from 'react'
import './Item.css';
import Button from '@material-ui/core/Button';
import { useStateValue } from '../../../StateProvider';
import CurrencyFormat from 'react-currency-format';

function Item({id, src, name, price}) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch the item in the data layer 
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                src: src,
                name: name,
                price: price,
            }
        })
    }
    return (
        <div className='item'>
            <img src={src} alt='image' />
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
            <br/>
            <Button onClick={addToBasket} variant="contained" style={{backgroundColor: '#00adb5'}}>
                Add to Cart
            </Button>
        </div>
    )
}

export default Item
