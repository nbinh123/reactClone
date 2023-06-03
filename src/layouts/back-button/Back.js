import React from "react";
import styles from "./back.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

function BackButton({ path }) {
    return (
        <Link to={path}>
            <div className={styles.back}>
                <button>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
        </Link>
    );
}

export default BackButton;