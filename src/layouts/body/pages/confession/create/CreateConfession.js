import React from "react";
import styles from "./createConfession.module.scss"
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

import postAPI from "../../../../../ulti/fetchAPI/postAPI"
import createDB from "../../../../../express/CRUD/createDB";
import Back from "../../../../back-button/Back"
import Toast from "../../../../toast-ui/Toast";

function CreateConfession({ onChanging, onShowToast }) {

    const messageRef = useRef()
    const fromRef = useRef()
    const toRef = useRef()

    const [change, setChange] = useState(false)

    const handleCreateConfession = () => {
        let data = {
            from: fromRef.current.value,
            to: toRef.current.value,
            message: messageRef.current.value
        }
        console.log(data)
        fromRef.current.value = ""
        toRef.current.value = ""
        messageRef.current.value = ""
        createDB("confession/api/create", 3001, data)
        setChange(!change)
        onShowToast("success","Thêm confession thành công!!")
        onChanging()
    }

    return (
        <div className={styles.container}>
            <Back path={"/confession"} />
            <h1>Confession</h1>
            <div className={styles.form}>
                <div className={styles.info}>
                    <div className={styles.from}>
                        <input placeholder="From:" ref={fromRef}></input>
                        <br></br>
                        <small>Khum bắt buộc</small>
                    </div>
                    <textarea ref={messageRef} ></textarea>
                    <div className={styles.to}>
                        <input placeholder="To:" ref={toRef}></input>
                        <br></br>
                        <small>Bắt buộc :{">>"}</small>
                    </div>
                </div>
                <div onClick={() => handleCreateConfession()}>
                    <Link to={"/confession"}>
                        <div>
                            <button>
                                Gửi lời yêu thương bay đi
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}



export default CreateConfession;