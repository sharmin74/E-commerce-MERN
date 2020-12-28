import React from 'react'
import './Products.css';
import Item from './Item/Item';
import airpods from '../Photos/airpods.jpg';
import speakers from '../Photos/speaker.jpg';
import macbookpro from '../Photos/macbookpro.jpeg';
import watch from '../Photos/watch.jpg';

function Products() {
    return (
        <div className='products'>
            <Item 
            id='1'
             src={airpods}
             name="Airpods pro"
             price={20000}
            />
            <Item 
            id='2'
             src={speakers}
             name="Speakers"
             price={4000}
            />
               <Item 
               id='3'
             src={watch}
             name="Watch"
             price={1900}
            />
               <Item
               id='4' 
             src={macbookpro}
             name="Macbook pro"
             price={93000}
            />
        </div>
    )
}

export default Products
