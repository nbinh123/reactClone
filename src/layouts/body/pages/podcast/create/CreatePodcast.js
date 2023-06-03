import React from "react";
import styles from "./createPodcast.module.scss"
import { useState, useEffect, useRef } from "react"

import getAPI from "../../../../../ulti/fetchAPI/getAPI";
import postAPI from "../../../../../ulti/fetchAPI/postAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

import Back from "../../../../back-button/Back";

function CreatePodcast() {

    const titleRef = useRef()
    const imgRef = useRef()
    const linkRef = useRef()
    const authorRef = useRef()

    const getData = () => {
        let data = {
            name: titleRef.current.value,
            author: authorRef.current.value,
            img: imgRef.current.value,
            link: linkRef.current.value
        }
        return data
    }

    const createPodcast = (data) => {
        postAPI("http://localhost:2222/podcastList", data)
    }

    return (
        <div className={styles.container}>
            <Back path={"/podcast"} />
            <div className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Tiêu đề: </label>
                    <input ref={titleRef} placeholder="Tiêu đề"></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Ảnh minh họa: </label>
                    <input ref={imgRef} placeholder="Link ảnh minh họa 1:1"></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Link Youtube: </label>
                    <input ref={linkRef} placeholder="Link Youtube"></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Tác giả: </label>
                    <input ref={authorRef} placeholder="Tác giả"></input>
                </div>
                <Link to={"/podcast"}>
                    <div className={styles.addBtn}>
                        <button onClick={() => createPodcast(getData())}>Thêm</button>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default CreatePodcast;