import React from 'react'
import styles from '../styles/components/SpaceItem.module.css'

export function SpaceItem(props) {

  return (
    <div className={styles.spaceItemContainer}>
      <div className={styles.spaceImage}>
        <img src={props.image} alt="" />
      </div>

      <div className={styles.spaceContents}>
        <strong>{props.name} </strong>
        <strong>R$ {props.value}</strong>
      </div>

      <div className={styles.spaceButtons}>
        <button onClick={() => { props.addToCart(props) }}>Comprar</button>
        <button>Detalhes</button>
      </div>
    </div>
  );
}