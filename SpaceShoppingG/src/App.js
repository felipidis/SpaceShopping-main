import React from 'react'
import { Header } from './components/Header'
import { Filter } from './components/Filter'
import { Body } from './components/Body'
import './styles/global.css'
import { Cart } from './components/Cart'
import GlobalState from './Global/GlobalContext'

export default function App() {

  return (
    <div className="App">
      <GlobalState>
        <Header />
        <Filter />
        <Body />
        <Cart />
      </GlobalState>
    </div>
  );
}
