import React from "react";
import styles from "./searchTag.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMagnifyingGlass, faMusic } from "@fortawesome/free-solid-svg-icons";

function SearchTagMusic({ index, name, author, link }) {
    return (
        <a href={link} target="_blank">
            <div className={styles.container}>
                <div className={styles.index}>
                    <p>{index}</p>
                </div>
                <div className={styles.tutor}>
                    <FontAwesomeIcon className={styles.icon} icon={faMusic} />
                </div>
                <div className={styles.info}>
                    <p>{name}</p>
                    <p>{author + "  "}<FontAwesomeIcon className={styles.icon} icon={faCheck} /></p>
                </div>
            </div>
        </a>
    );
}

export default SearchTagMusic;