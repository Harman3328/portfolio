import React from 'react'
import styles from "./JobOnePopup.module.css"

function JobOnePopup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                {props.children}
                <button className={styles.popupButton} onClick={() => props.setTrigger()}>Close</button>
            </div>
        </div>
    ) : "";
}

export default JobOnePopup
