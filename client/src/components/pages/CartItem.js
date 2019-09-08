import React, { Fragment } from 'react'




const CartItem = ({item: {name, id, image} }) =>  {

            return (
            <Fragment>
            <img src={image} alt=""/>
            <h3>{name} {id}</h3> 
 
            </Fragment>
        )
     
}


export default CartItem
