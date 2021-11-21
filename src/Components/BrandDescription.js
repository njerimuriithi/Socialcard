import styles from './Card.module.css'
import React from 'react'

function BrandDescription( {name,description,handle,community}) {
    return (
        <div>
            <h1 className={styles.textContext}>{name}</h1>
            <p className={styles.descriptionText}>{description}</p>
            <p className={styles.handle}>{handle}</p>
            <p>{community}</p>
        </div>
    )
}

export default BrandDescription
