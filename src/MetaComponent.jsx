import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import styles from './MetaComponent.module.css';
import classnames from 'classnames';

export function MetaComponent() {

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const classes = classnames(styles.textMeta, {
        [styles.textoEnAzul]: hover,
        [styles.textoNegro]: !hover
    });

    const arrowClassess = classnames(styles.rightImage, {
        [styles.arrowToRigth]: hover,
        [styles.arrowBack]: !hover
    });

    const classesDiv = classnames(styles.metasDiv, {
        [styles.pointerDiv]: hover,
        [styles.unPointerDIv]: !hover
    });

    return (<div className={classesDiv} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={styles.leftImage}><AiOutlineInfoCircle size={25} /></div>
        <div className={styles.metaContent}>
            <div>
                <h4 className= {classes}>Site Metas</h4>
                <p className={`${styles.textMeta} ${styles.textMetaDesc}`}>Title, Description, Favicon and more</p>
            </div>
        </div>
        <div className={arrowClassess}><FiChevronRight size={20} /></div>
    </div>
    );
}