import React, { useContext } from 'react'
import GlobalStateContext from '../Global/GlobalStateContext';
import styles from '../styles/components/Cart.module.css'

export function Cart() {
  const data = useContext(GlobalStateContext)
  let shopValue = 0

  const removeFromCart = (item) => {
    const newCartItems = data.states.cartItems.filter(element => element.name !== item)

    data.setters.setCartItems(newCartItems)
  }

  const confirmPurchase = ( value) => {
    if (value === 0) {
      alert("Coloque algum produto no carrinho")
    }
    else {
      alert("Compra finalizada R$ " + value)

      data.setters.setCartItems([])
    }
  }

  return (
    <div>
      {data.states.cartOn && <div className={styles.cartContainer}>
        <p>Cart</p>
        <div className={styles.cartContainerItems}>
          {data.states.cartItems.map(item => {
            shopValue += item.value * item.quantity
            return <div key={item.name} className={styles.cartContainerItemsCard}>
              
              <span onClick={() => { removeFromCart(item.name) }}
              className={styles.cartContainerItemsCardRemoveItem}
              > X </span>
              <img src={item.image} alt="" />
              <div className={styles.cartContainerItemsCardContent}>
                <span>{item.name}</span>
                <span>quantidade <span>{item.quantity}</span></span>
              </div>
            </div>
          })}
        </div>
        <span>R$ {shopValue}</span>
        <button onClick={() => { confirmPurchase( shopValue) }}>Comprar</button>
      </div>}
    </div>
  );
}