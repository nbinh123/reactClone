import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./extraLogin.module.scss";

function Radio({text, value, check }) {

    const navigate = useNavigate()
    const radioRef = useRef()
    const [change, setChange] = useState(false)

    useEffect(() => {
        if(radioRef.current.checked){
            check(value)
        }
    },[change])

    return (
        <div className={styles.radio}>
            <input onClick={() => setChange(!change)} ref={radioRef} type="radio" name="prv" value={value}></input>
            <p>{text}</p>
        </div>
    );
}

export default Radio;