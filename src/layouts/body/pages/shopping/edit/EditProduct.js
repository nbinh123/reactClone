import React from "react"
import styles from "./editProduct.module.scss"
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

function EditProduct() {
    return (
        <div className={styles.container}>
            <Link to={"/shop"}>
                <div className={styles.back}>
                    <FontAwesomeIcon className={styles.icon} icon={faArrowLeft} />
                </div>
            </Link>












            
        </div>
    );
}

export default EditProduct;