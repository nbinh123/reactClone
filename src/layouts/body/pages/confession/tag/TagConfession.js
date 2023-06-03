import React from "react";
import styles from "./tagConfession.module.scss"

function TagConfession({index}) {
    return (  
        <div className={styles.container}>
            <img src="https://vn-live-01.slatic.net/p/dbf45cda7d56f7641227a80a5957efdf.jpg"></img>
            <b>{index}</b>
        </div>
    );
}

export default TagConfession;