import React from 'react'
import styles from './Image.module.css'
import Button from './Button'

import lady from './lady.png'


function Image() {
    return (
        <div className={styles.body}>
            <div>
            <img   className={styles.imageStyle} 
             src={lady} alt="a lady"/>
                </div>
                <p className={styles.textContext}> Melinda , 28</p> 
                <Button/>


</div>
            
    )
}

export default Image
