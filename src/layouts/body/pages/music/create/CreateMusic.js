import React, { useRef, useState } from "react"
import styles from "./createMusic.module.scss"
import Back from "../../../../back-button/Back";

import createDB from "../../../../../express/CRUD/createDB";

function CreateMusic() {

    const [change, setChange] = useState(false)

    const nameRef = useRef()
    const authorRef = useRef()
    const linkRef = useRef()

    const submit = () => {
        let data = {
            name: nameRef.current.value,
            author: authorRef.current.value,
            link: linkRef.current.value
        }
        nameRef.current.value = ""
        authorRef.current.value = ""
        linkRef.current.value = ""

        //sáng mai sẽ xử lí post dữ liệu lên database, cập nhập đường dẫn, router, controllers
        createDB("music/api/post", 3001, data)
        console.log(data)
    }

    return (
        <div className={styles.container}>
            <Back path={"/music"} />
            <div className={styles.form}>
                <div className={styles.name}>
                    <input placeholder="name" ref={nameRef} type="text"></input>
                </div>
                <div className={styles.author}>
                    <input placeholder="author" ref={authorRef} type="text"></input>
                </div>
                <div className={styles.link}>
                    <input placeholder="link" ref={linkRef} type="text"></input>
                </div>
            </div>
            <div className={styles.addBtn} onClick={submit}>
                <button>Thêm</button>
            </div>
        </div>
    );
}

export default CreateMusic;