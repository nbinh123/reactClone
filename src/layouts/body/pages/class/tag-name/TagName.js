import React, { useRef, useEffect, useState } from "react";
import styles from "../tag-name/tagName.module.scss"


import { Link } from 'react-router-dom';
import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Tippy from '@tippyjs/react'
import Tippy from '@tippyjs/react/headless'
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

function TagName({ name, img, sex, description, hobby }) {

    const [iconColor, setIconColor] = useState(false)
    const [icon, setIcon] = useState()

    const checkIconSexColor = (sex) => {
        if (sex === "male") {
            setIconColor(false)
        } else {
            setIconColor(true)
        }
    }
    const checkSexIcon = (sex) => {
        return sex === "male" ? faMars : faVenus
    }
    useEffect(() => {
        checkIconSexColor()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.introduce}>
                <div className={styles.info}>
                    <b>{name}</b>
                    <FontAwesomeIcon className={clsx(styles.icon, {
                        [styles.mars]: iconColor,
                        [styles.venus]: !iconColor
                    })} icon={checkSexIcon(sex)} />
                    <p>{hobby}</p>
                </div>
                <div className={styles.avatar}>
                    <img className={styles.img} src={img}></img>
                </div>
            </div>
            <div className={styles.detail}>
                    
            </div>
        </div>
    );
}

export default TagName;