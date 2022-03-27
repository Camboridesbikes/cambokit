import React, { FunctionComponent } from 'react'

import Button from '../Button/Button'

import styles from './footer.modules.scss';

type FooterProps = {
    children: React.ReactNode;
    
}

export const Footer  = ({children} : FooterProps) => {
    return (
        <footer>
    <div className={styles.footer}>
        {children}
    </div>
</footer>
    )
}

type NavProps = {
title? : string;
children: React.ReactNode;
}

export const Navigation = ({title, children} : NavProps) => {
    return(
        <div className={`${styles.col_sm} ${styles.nav}`}>
            {title == undefined ? null : <a href='/'><h3 >{title}</h3></a>  }
            {children}
        </div>
    )
}

type ContactProps = {
email? : string;
phone? : string;
}

export const ContactInfo= ({email, phone} : ContactProps) => {
    return(
        <div className={styles.col_sm}>
            <h3>Contact</h3>
            <p style={{margin: `0`}}>{email}</p>
            <p style={{margin: `0`}}>{phone}</p>
        </div>
    )
}


type NewsProps = {

}

export const Newsletter = ({}) => {
    return(
        <div className={`${styles.col_lg} ${styles.newsletter}`}>
            <h3>Sign Up For Newsletter</h3>
            <form name="newsletter" >
                <div > 
                    <label htmlFor="name">Name: <input type="text" name='name' /></label>
                    <label htmlFor="email">Email: <input type="email" name='email' /></label>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}
