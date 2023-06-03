import React, { useState, useEffect, useRef} from "react";
import styles from "./extraLogin.module.scss"

import { useNavigate, useLocation } from "react-router-dom";
import { unstable_HistoryRouter } from "react-router-dom";
import LoginInput from "./LoginInput";
import Radio from "./Radio";


function ExtraLogin({onOK ,onShowToast}) {
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state

    const form = useRef({
        client: false,
        name: false,
        password: false,
        place: false,
        birth: null,
        answer: null
    })
    const optionRef = useRef()
    const radioRef1 = useRef()
    const radioRef2 = useRef()
    const radioRef3 = useRef()
    const radioRef4 = useRef()

    const [change, setChange] = useState(false)
    const [fornData, setFormData] = useState(form.current)

    const [client, setClient] = useState(false)
    const [name, setName] = useState(false)
    const [password, setPassword] = useState(false)
    const [place, setPlace] = useState(false)
    const [birth, setBirth] = useState(0)
    const [answer, setAnswer] = useState("")

    useEffect(() => {
        form.current.client = client
    }, [client])
    useEffect(() => {
        form.current.name = name
    }, [name])
    useEffect(() => {
        form.current.password = password
    }, [password])
    useEffect(() => {
        form.current.place = place
    }, [place])
    useEffect(() => {
        form.current.answer = answer
    }, [answer])
    useEffect(() => {
        form.current.birth = birth
    }, [birth])

    const checkTrue = (state) => {
        state(true)
    }
    const checkFalse = (state) => {
        state(false)
    }

    const submit = () => {
        console.log(form.current)
        if (form.current.name === true &&
            form.current.password === true &&
            form.current.birth === "1" &&
            form.current.answer === "A" &&
            form.current.place === true
        ) {
            onShowToast("success","Đăng nhập thành công!!")
            onOK()
            navigate(data.path)
        }
    }

    const checkRadio = (value) => {
        setAnswer(value)
    }
    return (
        <div className={styles.container}>
            <div className={styles.formGroup}>
                <h1>Login</h1>
                <small>Điền đúng thông tin sẽ được vào, không thì có cái nịt</small>
                <LoginInput
                    checkFalse={() => checkFalse(setClient)}
                    checkTrue={() => checkTrue(setClient)}
                    trueAnswer={[]}
                    placeholder={"Nhà ngươi là ai?"}
                    autoTrue={true} />
                <LoginInput
                    checkFalse={() => checkFalse(setName)}
                    checkTrue={() => checkTrue(setName)}
                    trueAnswer={["nbinh"]}
                    placeholder={"Người đẹp trai nhứt thế giới là ai?"} />
                <LoginInput
                    checkFalse={() => checkFalse(setPassword)}
                    checkTrue={() => checkTrue(setPassword)}
                    trueAnswer={["hellocacban"]}
                    placeholder={'Mật khẩu mà "tui" hay dùng là: '} />
                <LoginInput
                    checkFalse={() => checkFalse(setPlace)}
                    checkTrue={() => checkTrue(setPlace)}
                    trueAnswer={["công viên"]}
                    placeholder={'Nơi "tui" thích đến nhứt là:'} />
                <div className={styles.birth}>
                    <select ref={optionRef} onChange={() => setBirth(optionRef.current.value)}>
                        <option>Tháng sinh của tui là</option>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                        <option value="5"> 5</option>
                        <option value="6"> 6</option>
                        <option value="7"> 7</option>
                        <option value="8"> 8</option>
                        <option value="9"> 9</option>
                        <option value="10"> 10</option>
                        <option value="11"> 11</option>
                        <option value="12"> 12</option>
                    </select>
                </div>
                <div className={styles.pick}>
                    <label className={styles.question}>Vì sao cafe lại đắng !?</label>
                    <br></br>
                    <Radio check={checkRadio} value={"A"} text={"A. Đơn giản vì nó đắng"} />
                    <br></br>
                    <Radio check={checkRadio} value={"B"} text={"B. Vì nó thiếu sữa"} />
                    <br></br>
                    <Radio check={checkRadio} value={"C"} text={"C. Do thiếu nụ cười ngọt ngào của em"} />
                    <br></br>
                    <Radio check={checkRadio} value={"D"} text={"D. Do bị rối loạn vị giác"} />
                </div>
                <div className={styles.submit}>
                    <button onClick={submit}>Checking</button>
                </div>
            </div>
        </div>
    );
}

export default ExtraLogin;