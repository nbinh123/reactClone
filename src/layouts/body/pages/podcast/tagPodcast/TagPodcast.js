import React from "react";
import styles from "./tagPodcast.module.scss"

function TagPodcast({ name, author, image, link }) {
    // flex theo chiều dọc, tỉ lệ trên 2 dưới 3
    return (
        <div className={styles.tagPodcast}>
            <div className={styles.i}>
                <img src={image} className={styles.img}></img>
            </div>
            <div className={styles.info}>
                <b className={styles.name}>{name}</b>
                <p className={styles.author}>-- {author} --</p>
                <div className={styles.click}>
                    <a href={link} target="_blank" className={styles.listenBtn}>Nghe</a>
                    <a className={styles.readBtn}>Đọc</a>
                </div>
            </div>
        </div>);
}

export default TagPodcast;