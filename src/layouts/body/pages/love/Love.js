import React, { useEffect, useState, useRef } from "react";
import styles from "./love.module.scss"

import postAPI from "../../../../ulti/fetchAPI/postAPI";
import getAPI from "../../../../ulti/fetchAPI/getAPI";

function Love() {

    const [change, setChange] = useState(false)
    const [formData, setFormData] = useState({})
    const [value, setValue] = useState([])
    const [result, setResult] = useState("")
    const [inputValue, setInputValue] = useState("")

    const resultRef = useRef()

    const name1 = useRef()
    const myMonth = useRef()
    const myDay = useRef()
    const myYear = useRef()

    const name2 = useRef()
    const theirDay = useRef()
    const theirMonth = useRef()
    const theirYear = useRef()


    useEffect(() => {

    }, [change])


    const clearInput = () => {
        name1.current.value = ""
        myDay.current.value = ""
        myMonth.current.value = ""
        myYear.current.value = ""
        name2.current.value = ""
        theirDay.current.value = ""
        theirMonth.current.value = ""
        theirYear.current.value = ""
    }

    const birthRule = (data) => {
        return (data === "" ? "?" : data) 
    }

    const getData = () => {

        let myName, myBirthday, theirBirthday, theirName

        myName = name1.current.value.trim()
        myBirthday = `${birthRule(myDay.current.value.trim())}/${birthRule(myMonth.current.value.trim())}/${birthRule(myYear.current.value.trim())}`
        theirName = name2.current.value.trim()
        theirBirthday = `${birthRule(theirDay.current.value.trim())}/${birthRule(theirMonth.current.value.trim())}/${birthRule(theirYear.current.value.trim())}`

        let dataObject = {
            person1: {
                name: myName,
                birth: myBirthday
            },
            person2: {
                name: theirName,
                birth: theirBirthday
            }
        }
        
        clearInput()
        return dataObject
    }

    const randomNumber = ({min = 1, max = 100}) => {
        return Math.round(Math.random() * (max - min)) + min
    }

    const solveRandom = (data, name1, name2) => {


        let num = (((data.person1.name === name1 && data.person2.name === name2) || (data.person1.name === name2 && data.person2.name === name1)) ? randomNumber(999,1000) : randomNumber(1,100))
        console.log(num)
        let answer = resultRef.current
        answer.innerText = `${num}%`
    }
    //POST dữ liệu lên API
    const createData = (data) => {
        solveRandom(data, "Bình", "Linh")
        postAPI("http://localhost:2222/infoLoveGames", data)

    }

    const readData = () => {
        getAPI("http://localhost:2222/infoLoveGames", setValue)
        getData()
    }
    return (
        <div className={styles.form}>
            <div className={styles.loveContainer}>
                <div className={styles.title}>
                    <h1>Chào mừng</h1>
                </div>
                <div className={styles.people}>
                    <div className={styles.person1}>
                        <label>Tên</label>
                        <br></br>
                        <input ref={name1} placeholder="Nhập tên của bạn"></input>
                        <br></br>
                        <br></br>
                        <br></br>
                        <label>Ngày sinh</label>
                        <br></br>
                        <div className={styles.birthday}>
                            <input ref={myDay} type="text" placeholder="Ngày" className={styles.day}></input>
                            <input ref={myMonth} type="text" placeholder="Tháng" className={styles.month}></input>
                            <input ref={myYear} type="text" placeholder="Năm" className={styles.year}></input>
                        </div>
                    </div>
                    <div className={styles.answer}>
                        <h2 ref={resultRef}></h2>
                    </div>
                    <div className={styles.person2}>
                        <label>Tên</label>
                        <br></br>
                        <input ref={name2} placeholder="Nhập tên người bạn"></input>
                        <br></br>
                        <br></br>
                        <br></br>
                        <label>Ngày sinh</label>
                        <br></br>
                        <div className={styles.birthday}>
                            <input ref={theirDay} type="text" placeholder="Ngày" className={styles.day}></input>
                            <input ref={theirMonth} type="text" placeholder="Tháng" className={styles.month}></input>
                            <input ref={theirYear} type="text" placeholder="Năm" className={styles.year}></input>
                        </div>
                    </div>
                </div>
                <div className={styles.submit}>
                    <button type="button" onClick={() => createData(getData())}>Xem kết quả</button>
                </div>
            </div>
        </div>
    );
}

export default Love;