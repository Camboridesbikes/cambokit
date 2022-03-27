import React from 'react'


import styles from './cards.modules.scss'

type CardProps = {
    fluid? : string;
    title? : string;
    square? : boolean;
    linkPath? : string;
    tags? : Array<string>;
    tagOnClick? : void;
    date?: string;

}

export const Card = (props: CardProps) => {
    return (
        <div>
            
        </div>
    )
}

export const LinkCard  = ({fluid, title, square, linkPath} : CardProps) : JSX.Element => {
    /**
     * 
     */
    return(
        <div className={`${styles.linkCard}`} style={{backgroundImage: `url('${fluid}')`, /*padding: square ? '100%' : ''*/}}>
            <a href={`/${linkPath}`}>
                <div className={styles.inner}>
                    <h1 className={`${styles.title}`}>{title}</h1>
                </div>
                
            </a> 
        </div>
    )

}

export const BlogCard = ({fluid, title, linkPath, tags, tagOnClick, date} : CardProps) :JSX.Element => {
    return(
        <div className={`${styles.linkCard} ${styles.blogCard}`} style={{backgroundImage: `url('${fluid}')`, /*padding: square ? '100%' : ''*/}}>
            <a href={`/blog/article/${linkPath}`}>
                <div className={styles.inner}>
                    <h1 className={`${styles.title}`}>{title}</h1>
                </div>
                
            </a>  
            <CardFooter>
                <p style={{margin: '0', textAlign: 'left'}}>{date}</p>
                {tags == undefined ? <br/> : 
                        <TagContainer tags={tags}/>
            }    
            </CardFooter> 
            {/* {tags == undefined ? console.log('no tags: ' + tags) : 
                        <TagContainer tags={tags}/>
            }     */}
        </div>
    )

}

/**
 * CardDeck 
 * 
 * This componenet is a container for groups of card components.
 */

type DeckProps = {
    children : React.ReactNode;
}

export const CardDeck = ({children} : DeckProps) : JSX.Element => {
    return (
        <div className={`${styles.CardDeck}`} >
            {children}
        </div>
    )
}

//#region Card components

type CardFooterProps = {
    children : React.ReactNode;
}

const CardFooter = ({children} : CardFooterProps) => {
    return(
        <div className={`${styles.cardFooter}`}>
            {children}
        </div>
    )
}

type TagProps = {
    tags? : Array<string>;
    tag? : string;
}

const TagContainer = ({tags} : TagProps) => {
    return (
        <div style={{width: '100%', display: 'flex', overflow: 'hidden'}}>
            {tags != undefined ? tags.map( tag => <Tag tag={tag}/>) : <p>no tags</p>}
        </div>
    )
}

const Tag = ({tag} : TagProps) => {

    return (
        <div>
            <a  href={`/blog/${tag}`}><p className={styles.tag}>#{tag}</p></a>
        </div>
    )
        
}

//#endregion

