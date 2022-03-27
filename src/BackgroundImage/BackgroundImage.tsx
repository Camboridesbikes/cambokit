import React from 'react'

import styles from './BackgroundImage.modules.scss'

type BackgroundImageProps = {
    children : React.ReactNode;
    fluid : string;
    bgStyle? : string;
    innerStyle? : string;
    objectPosition?: string;
} 

export default function BackgroundImage({fluid, bgStyle, innerStyle, objectPosition, children} : BackgroundImageProps) : JSX.Element {

    return (
        <div className={`${styles.background} ${bgStyle}`} style={{backgroundImage: `url('${fluid}')`, objectPosition: `${objectPosition}`}} >
            <div className={`${styles.inner} ${innerStyle}`}>
            {children}
            </div>
            
        </div>
    )
}


