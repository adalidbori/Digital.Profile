import { useState } from "react";
import { AiTwotoneUpSquare } from "react-icons/ai";
import styles from './SectionItem.module.css';
import classnames from 'classnames';
export function SectionItem(props){
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const classes = classnames(styles.generalGrid, {
        [styles.generalGridBackgroundHover]: hover,
        [styles.generalGridBackground]: !hover
    });

    const textClasses = classnames(styles.titleSectionItem, {
        [styles.textGridColorHover]: hover,
        [styles.textGridColor]: !hover
    });

    return(
        <div className={classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={styles.spanSectionItem}>
                <span ><AiTwotoneUpSquare size={8} color={`${props.color}`}/></span>
            </div>
            <div className={textClasses}>
                {props.name}
            </div>
        </div>
    );
}