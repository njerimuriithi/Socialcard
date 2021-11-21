import React from 'react'
import { FaInstagram,FaTwitter,FaFacebook,FaLinkedin} from "react-icons/fa";
import styles from './IconPage.module.css'
import './IconPage.css'
import {IconContext} from "react-icons"

function IconPage() {
    return (
        <IconContext.Provider 
        value={{ color:'black',size:'25px', className:"iconItems"}} 
        >
        <div  className={styles.icon}>
            
            <FaInstagram/> 

            <FaTwitter/> 
            <FaFacebook/> 
            <FaLinkedin/>
            
        </div>
        </IconContext.Provider>
    )
}

export default IconPage

