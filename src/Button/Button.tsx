import React, { ButtonHTMLAttributes, ComponentProps, FunctionComponent } from 'react'

import styles from './button.modules.scss'

interface Props {
}

const Button : FunctionComponent<Props & ButtonHTMLAttributes<HTMLButtonElement>>  = ({children,  ...props}) => {

    return (
        <button className={`${styles.button}`} {...props}>
            {children}
        </button>
    )
}

export default Button