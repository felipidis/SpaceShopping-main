import React, { useContext} from 'react';
import GlobalStateContext from '../Global/GlobalStateContext';
import styles from '../styles/components/Filter.module.css'

export function Filter() {
  const data = useContext(GlobalStateContext)

  return (
    <div className={styles.filterContainer}>

      <div className={styles.filterContainerSelect}>
        <label htmlFor="categorias">Listar por: </label>
        <select name="categorias" id="categorias" onChange={(event) => {data.setters.setOrder(event.target.value)}}>
          <option value="wanted">Mais procurado</option>
          <option value="greater-price">Maior preço</option>
          <option value="smallest-price">Menor preço</option>
        </select>

        <select name="categorias" id="categorias" onChange={(event) => {data.setters.setCardsNumber(event.target.value)}}>
          <option value={6}>5 itens por pagina</option>
          <option value={11}>10 itens por pagina</option>
          <option value={16}>15 itens por pagina</option>
        </select>
      </div>

      <div className={styles.filterContainerSpan}>
        <span>Primeira|</span>
        <span>Anterior</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>1</span>
        <span>Próxima</span>
        <span>|Ultima</span>
      </div>
    </div>
  );
}