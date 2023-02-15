import React from 'react'
import styles from "./Header.module.css"


const Header = () => {
  return (
        <header className={styles.header}>
          <h1>Catálogo de Livros</h1>
        </header>
  )
}

export default Header