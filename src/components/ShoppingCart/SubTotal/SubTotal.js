import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../../reducer';
import { useStateValue } from '../../../StateProvider';

function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div>
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <h3>Subtotal({basket?.length} { basket?.length === 1 ? 'item' : 'items'}): {value}</h3>
                </>
            )}
            decimalScale = {2}
            value={getBasketTotal(basket)}
            displayType = {'text'}
             thousandSeparator={true} 
             prefix={' ₹ '} 
             />
        </div>
    )
}

export default SubTotal;
