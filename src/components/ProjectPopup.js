import React from 'react'
import styles from "./ProjectPopup.module.css"

function ProjectPopup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                {props.children}
                <button className={styles.popupButton} onClick={() => props.setTrigger()}>Close</button>
            </div>
        </div>
    ) : "";
}

export default ProjectPopup
