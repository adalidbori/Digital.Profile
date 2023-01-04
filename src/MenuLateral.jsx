import styles from './MenuLateral.module.css';
import { MetaComponent } from './MetaComponent';
import { SectionComponents } from './SectionComponents';

export function MenuLateral() {
    
    return (<div className={styles.menuLateral}>
        <MetaComponent />
        <SectionComponents />
        <div className={styles.addSectionBotonContainer}>
            <button className={styles.addSectionButton}>Add Section</button>
        </div>

    </div>);
}