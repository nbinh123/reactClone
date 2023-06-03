import React from "react";
import styles from "./tagMusic.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faHeadphones} from '@fortawesome/free-solid-svg-icons'

function TagMusic({ name, author, listen }) {
    return (
        <div className={styles.tagMusic}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.author}>{author}</p>
            <a href={listen} target="_blank" className={styles.listen}>Nghe <FontAwesomeIcon className={styles.headphoneIcon} icon={faHeadphones} /></a>
        </div>);
}

export default TagMusic;