import React from 'react'
import CountUp from 'react-countup';
import { MdOutlineCheckBox} from "react-icons/md";
import styles from './Card.module.css'
import {IconContext} from "react-icons"
import './IconPage.css'

function QualificationList({experience,followers}) {
   
    
    return (
        <IconContext.Provider 
        value={{ color:'green',size:'25px', className:"qualifyIcons"}} >
        <div className={styles.qualify}>
            <h1 className={styles.qualifyText}>
            <MdOutlineCheckBox/> 
                <CountUp end={10} duration={3}
            />
             {experience}
             </h1>
            <h1 className={styles.qualifyText}>
            <MdOutlineCheckBox/> 
                <CountUp
            end={10000} separator="," duration={2}
            /> {followers}</h1>
            
           
        </div>
        </IconContext.Provider>

    )

}

export default QualificationList