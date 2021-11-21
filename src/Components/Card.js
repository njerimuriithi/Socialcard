import React from 'react'
import styles from './Card.module.css'
import Button from './Button'
import IconPage from './IconPage'
import lady from './lady.png'
import BrandDescription from './BrandDescription'
import QualificationList from './QualificationList'


function Card() {
    return (
        <div className={styles.card}>

            <div >

            <img   className={styles.imageStyle} 
             src={lady} alt="a lady"/>

                </div>

                <div className={styles.Container}>    
                 <BrandDescription 
                   name="Melinda"
                   handle="@melindake"/>
                   <IconPage/>
                   <BrandDescription 
                   description="Brand and communication, strategy,
                   graphic desigh, illustrator and sofware developer"/>
                   <QualificationList
                    experience="years of experience"
                    followers="Followers"/>
                       

                      

                   
                   
                
                <Button/>
                
                </div>
               
      
</div>
            
    )
}

export default Card
