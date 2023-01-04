import { useState } from "react";
import styles from './SectionComponents.module.css';
import { SectionItem } from "./SectionItem";
export function SectionComponents(){

    const initialSections = [
        {
            id: 1,
            name: 'Youtube',
            color: 'blueviolet'
        },{
            id: 2,
            name: 'Twitter',
            color: 'aqua'
        },{
            id: 3,
            name: 'LinkdIn',
            color: 'brown'
        }
    ];

    const [sections, setSection] = useState(initialSections);

    return (
        <div>
            <ul style={{padding: '0px'}}>
                {sections.map(section => <li key={section.id}><SectionItem name={section.name} color={section.color}/></li>)}
            </ul>
        </div>
    );
}