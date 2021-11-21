import React from 'react'
import styles from './Button.module.css'

function Button () {
    return (
        <div className={styles.buttonContents}>
            <button className={styles.btnGrad}>Welcome to network</button>
        </div>
    )
}

export default Button

