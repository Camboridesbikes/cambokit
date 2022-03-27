import React from 'react'

import styles from './navbar.modules.scss'

/**
 * TODO: Sub navbar menu : do I make a conditional classname? I could make a switch statement or just a ternary. Or do I make a sub menu a completely differnent component?
 * 
 * TODO: make background transparent and text white when over the spalsh picture - then transition to white again below it. 
 */


type Props = {
    title? : string;
    bgColor?: string;
    sub? : boolean;
    children : React.ReactNode;
}

const NavBar = ({title, bgColor, sub,  children} : Props) : JSX.Element => {    

    return (
       <header className={`${styles.main}`} style={{backgroundColor: bgColor,  }}>
           <div className={`${styles.navContainer}`}>
                {!title ? "" : 
                    <h2 className={styles.siteTitle}>
                        <a href='/'>{title}</a>
                    </h2>  
                }
                <div className={styles.navbar} >
                    {children}
                </div>
                
           </div>
       </header>
    )
}

export default NavBar