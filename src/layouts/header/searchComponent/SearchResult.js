import React from "react";
import styles from "./search.module.scss"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function SearchResult({ name, price, img, onReRender }) {
    return (
        <Link to={"/shop"} className={styles.info}>
            <div className={styles.searchResult} onClick={onReRender}>
                <div className={styles.fl1}>
                    <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
                </div>
                <div className={styles.name}>
                    <div>
                        <img src={img} className={styles.img}></img>
                    </div>
                    <div >
                        <p className={styles.nickname}>{name}</p>
                        <p className={styles.username}>{price}$/ kg</p>
                    </div>
                </div>
            </div>
        </Link>);

}

export default SearchResult;