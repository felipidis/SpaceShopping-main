import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext';
import styles from '../styles/components/Body.module.css'
import { SpaceItem } from './SpaceItem'

//order functions
function orderItemsViews(a, b) {
  return b.view - a.view
}

function orderItemsGreaterPrice(a, b) {
  return b.value - a.value
}

function orderItemsSmallestPrice(a, b) {
  return a.value - b.value
}
//order functions

export function Body() {
  const data = useContext(GlobalStateContext)
  const [orderedList, setOrderedList] = useState([])

  //order function
  useEffect(() => {
    function orderedItems() {
      if (data.states.order === "wanted") {
        setOrderedList(data.states.storeItems.sort(orderItemsViews).map(num => num))
      }
      else if (data.states.order === "smallest-price") {
        setOrderedList(data.states.storeItems.sort(orderItemsSmallestPrice).map(num => num))
      }
      else {
        setOrderedList(data.states.storeItems.sort(orderItemsGreaterPrice).map(num => num))
      }
    }

    orderedItems()
  }, [data.states.order, data.setters, data.states.storeItems])
  //order function

  //search function
  let searchList = orderedList.filter(array => {
    const name = array.name.toLowerCase()
    return name.indexOf(data.states.search.toLowerCase()) > -1
  })


  //search function
  const body = {
    name: "",
    value: "",
    image: "",
    view: "",
    id: "",
    quantity: 0
  }

  const addToCart = (item) => {
    if (data.states.cartItems.length === 0) {
      body.name = item.name
      body.value = item.value
      body.image = item.image
      body.view = item.view
      body.id = item.id
      body.quantity = 1
      data.states.cartItems.push(body)
    }
    else{
      for (const cartItem of data.states.cartItems) {
        if (cartItem.name === item.name) {
          cartItem.quantity = cartItem.quantity + 1
          data.setters.setCartItems([...data.states.cartItems])
          return 0
        }
        else {
          body.name = item.name
          body.value = item.value
          body.image = item.image
          body.view = item.view
          body.id = item.id
          body.quantity = 1
        }
      }
      data.states.cartItems.push(body)
    }

    data.setters.setCartItems([...data.states.cartItems])
    console.log(data.states.cartItems);
  }

  let counterItems = 0

  return (
    <div className={styles.bodyContainer}>
      {searchList.map((item) => {
        counterItems++
        if (counterItems < data.states.cardsNumber) {
          return <div key={item.name}>
            <SpaceItem
              name={item.name}
              value={item.value}
              image={item.image}
              id={item.id}
              view={item.view}
              addToCart={addToCart}
            />
          </div>
        }
      })}
    </div>
  );
}