import React, { useEffect, useState } from "react";
import styles from "./confession.module.scss"
import readDB from "../../../../express/CRUD/readDB";

import { Link } from "react-router-dom"
import TagConfession from "./tag/TagConfession";

function Confession({ list, onChanging }) {

    const [messageList, setMessageList] = useState([])

    useEffect(() => {
        readDB("confession/api/get", 3001, setMessageList)
    }, [list])

    const showList = () => {
        console.log(messageList)
    }

    return (
        <div className={styles.container}>
            <div className={styles.create} onClick={showList}>
                <Link to={"create"}>
                    <button>Nhắn nhủ gì đi</button>
                </Link>
            </div>
            <div className={styles.messageList}>
                {messageList.map((message, index) => (
                    <Link to={`show/${message._id}`} key={index}>
                        <TagConfession
                            index={index + 1}
                            
                        />
                    </Link>
                ))}
            </div>
        </div>);
}

export default Confession;