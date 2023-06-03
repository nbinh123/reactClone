import React from "react";
import styles from "./language.module.scss"
import Tippy from "@tippyjs/react/headless";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';

function Language() {
    const onBack = () => {
        alert(123)
    }
    return (
        <Tippy
            placement="bottom"
            interactive={true}
            offset={[-50, 12]}
            render={attr => (
                <div tabIndex="-1" {...attr} className={[styles.languages, styles.multiLevel].join(" ")}>
                    <Tippy 
                        placement="left"
                        render={attr => (
                            <div tabIndex="-1" {...attr} >menu đa cấp</div>
                        )}
                    >
                        <div className={[styles.tool, styles.language].join(" ")}>
                            <p>Languages</p>
                        </div>
                    </Tippy>
                    <div className={styles.tool}>
                        <p>Help </p>
                    </div>
                    <div className={styles.tool}>
                        <p>Q&A</p>
                    </div>
                    <div className={styles.tool} onClick={onBack}>
                        <p>back</p>
                    </div>
                </div>
            )}
        >
            <div className={[styles.tool, styles.bars].join(" ")}>
                <FontAwesomeIcon icon={faBars} className={styles.iconBars} />
            </div>
        </Tippy>
    );
}

export default Language;