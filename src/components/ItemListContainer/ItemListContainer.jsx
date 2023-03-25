import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <h2 className='mx-5 my-3 d-flex justify-content-center'> {props.greeting} </h2>
  )
}

export default ItemListContainer