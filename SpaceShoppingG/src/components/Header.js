import React, { useContext, useState } from 'react';
import styles from '../styles/components/Header.module.css'
import Lupe from "../img/icons/search.svg"
import GlobalStateContext from '../Global/GlobalStateContext';

export function Header() {
    const data = useContext(GlobalStateContext)
    const [search, setSearch] = useState("")

    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                Space Shopping
            </div>

            <div className={styles.searchContainer}>
                <input type="text" 
                onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            data.setters.setSearch(search)
                        }
                    } 
                }
                onChange={(event) => {setSearch(event.target.value)}}
                value={search}/>

                <img src={Lupe} alt="busca"
                onClick={() => {data.setters.setSearch(search)}}
                />
            </div>

            <div className={styles.userContainer}>
                <span className={styles.userIcon}
                onClick={() => {alert("Still working")}}
                ></span>
                <span className={styles.cartIcon} 
                onClick={() => { data.setters.setCartOn(!data.states.cartOn) }}
                ><span>{data.states.cartItems.length}</span></span>
            </div>
        </div>
    );
}