import React, { useEffect } from "react";
import styles from "./login.module.scss"
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX, faSpinner, faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx"

function LoginInput({ placeholder, trueAnswer = [], autoTrue, checkTrue, checkFalse, mode, setString }) {

    const inputRef = useRef()
    const [isTrue, setIsTrue] = useState(false)
    const [loading, setLoading] = useState(false)
    const [timerId, setTimerId] = useState(null)
    const [inpValue, setInpValue] = useState("")

    const check = () => {
        for (let i = 0; i < trueAnswer.length; i++) {
            if (inpValue.trim().toLowerCase() == trueAnswer[i]) {
                return true
            }
            if (inpValue.trim().toLowerCase() != trueAnswer[i]) {
                return false
            }
        }
    }

    const okok = () => {
        if (check() || autoTrue) {
            if (inpValue !== "") {
                setIsTrue(true)
            } else {
                setIsTrue(false)
            }
        } else {
            setIsTrue(false)
        }
        if (timerId) {
            clearTimeout(timerId)
            setLoading(true)
        }
        const newtimerId = setTimeout(() => {
            setLoading(false)
        }, 200)
        setTimerId(newtimerId)
    }

    useEffect(() => {
        if(mode === "main"){
            setString(inpValue)
        }
        
    },[inpValue])

    useEffect(() => {
        okok()
    }, [inpValue])

    useEffect(() => {
        if (isTrue) {
            checkTrue()
        } else {
            checkFalse()
        }
    }, [isTrue])

    return (
        <div className={styles.client}>
            {!inpValue
                ? ""
                : loading
                    ?
                    <FontAwesomeIcon className={clsx(styles.spinnerIcon)} icon={faSpinner} />
                    :
                    ((!isTrue)
                        ?
                        <FontAwesomeIcon className={clsx(styles.icon, styles.incorrect)} icon={faX} />
                        :
                        <FontAwesomeIcon className={clsx(styles.icon, styles.correct)} icon={faCheck} />)
            }
            <input onChange={e => {
                setInpValue(e.target.value)
            }} ref={inputRef} placeholder={placeholder}></input>
        </div>
    );
}

export default LoginInput;