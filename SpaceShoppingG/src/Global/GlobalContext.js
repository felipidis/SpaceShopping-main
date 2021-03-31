import React, { useEffect, useState } from "react";
import GlobalStateContext from './GlobalStateContext'
import image from '../img/spaceImg/SpaceSuit.jpg'

const GlobalState = (props) => {

  //StoreItems
  const [storeItems, setStoreItems] = useState([
    { name: "Vanguard helmet", value: 10, image: image, view: 10, id: 1  },
    { name: "Vanguard jacket", value: 80, image: image, view: 20, id: 2 },
    { name: "Vanguard pants", value: 50, image: image, view: 30, id: 3},
    { name: "Vanguard gloves", value: 5, image: image, view: 40, id: 4},
    { name: "Vanguard boots", value: 20, image: image, view: 50, id: 5},
    { name: "Hextec helmet", value: 200, image: image, view: 9, id: 6 },
    { name: "Hextec jacket", value: 400, image: image, view: 11, id: 7 },
    { name: "Hextec pants", value: 250, image: image, view: 13, id: 8 },
    { name: "Hextec gloves", value: 210, image: image, view: 16, id: 9 },
    { name: "Hextec boots", value: 190, image: image, view: 18, id: 10 },
    { name: "traveler helmet", value: 1000, image: image, view: 46, id: 11 },
    { name: "traveler jacket", value: 3000, image: image, view: 5, id: 12 },
    { name: "traveler pants", value: 2000, image: image, view: 3, id: 13 },
    { name: "traveler gloves", value: 1500, image: image, view: 1, id: 14 },
    { name: "traveler boots", value: 1000, image: image, view: 105, id: 15 }
  ])
  //StoreItems

  //Order
  const [order, setOrder] = useState("wanted")
  const [cardsNumber, setCardsNumber] = useState(6)
  //Order

  //search
  const [search, setSearch] = useState("")

  useEffect(() => {
    console.log(search);
  },[search])
  //search

  //Cart items
  const [cartOn, setCartOn] = useState(false)
  const [cartItems, setCartItems] = useState([])
  //Cart items

  const states = { cartOn, cartItems, storeItems, order, cardsNumber, search}
  const setters = { setCartOn, setCartItems, setOrder, setCardsNumber, setSearch }
  const requests = {}

  const data = { states, setters, requests }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider >
  );
}

export default GlobalState