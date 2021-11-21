import React from 'react'
import { FaRegThumbsUp,FaUsers,FaMailBulk,FaRegHeart} from "react-icons/fa";
import styles from './IconPage.module.css'
import './IconPage.css'
import {IconContext} from "react-icons"

function IconPage() {
    return (
        <IconContext.Provider 
        value={{ color:'white',size:'20px', className:"iconItems"}} 
        >
        <div  className={styles.icon}>
            
            <FaRegThumbsUp/> 

            <FaMailBulk/> 
            <FaRegHeart/> 
            <FaUsers/>
            
        </div>
        </IconContext.Provider>
    )
}

export default IconPage

