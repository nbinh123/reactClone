import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./music.module.scss"
import TagMusic from "./tagsMusic/TagsMusic";
import Tippy from '@tippyjs/react/headless'
import SearchTagMusic from "./searchTag/SearchTagMusic";

import getAPI from "../../../../ulti/fetchAPI/getAPI";
import { Link } from "react-router-dom";

function Music({ tagsMusic }) {

    const [musicList, setMusicList] = useState([])
    const [inpValue, setInpValue] = useState("")
    const [timerId, setTimerId] = useState(null);
    const [searchValue, setSearchValue] = useState([])
    const [show, setShow] = useState(true)

    // useEffect này gọi 1 lần để lấy ra danh sách các bài hát
    useEffect(() => {
        getAPI("http://localhost:3001/music/api/get", setSearchValue)
    }, [])
    useEffect(() => {
        if (Array.from(inpValue).length === 0) {
            getAPI("http://localhost:3001/music/api/get", setSearchValue)
        }
        //http://localhost:3001/music/api/get
    }, [inpValue])
    // useEffect này được gọi khi inpValue thay đổi, được dùng để gọi API tìm kiếm
    useEffect(() => {
        find()
    }, [inpValue])

    const find = () => {
        if (timerId) {
            clearTimeout(timerId);
        }
        const newTimerId = setTimeout(() => {
            fetch(`/music/api/find?name=${inpValue.trim()}`)
                .then(data => data.json())
                .then(data => {
                    setSearchValue(data)
                })
        }, 650)
        setTimerId(newTimerId)
    }
    const search = () => {

    }
    const postAPI = () => {

    }
    const add = () => { }
    const unHide = () => { }

    return (
        <div className={styles.container}>
            <div className={styles.tools}>
                <Link to={"create"}>
                    <div className={styles.add}>
                        <button onClick={add}>Thêm bài hát</button>
                    </div>
                </Link>
                <div className={styles.searchInput}>
                    <div>
                        <input onClick={unHide} onChange={(text) => { setInpValue(text.target.value) }}></input>
                    </div>
                </div>
                <div className={styles.search}>
                    <button onClick={search}>Tìm kiếm</button>
                </div>
            </div>
            <div className={styles.music}>
                {searchValue.map((song, index) => <TagMusic
                    key={index}
                    name={song.name}
                    author={song.author}
                    listen={song.link}
                />)}
            </div>
        </div>
    );
}

export default Music;