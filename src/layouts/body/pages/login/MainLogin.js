import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./login.module.scss"
import LoginInput from "./LoginInput";

function MainLogin({onOK, onShowToast, onSubmit}) {
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state

    const form = useRef({

    })

    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    const [password, setPassword] = useState(false)
    const [nickname, setNickname] = useState(false)

    const pickValue = (state, value) => {
        state(value)
    }
    const checkTrue = (state) => {
        state(true)
    }
    const checkFalse = (state) => {
        state(false)
    }
    const submit = () => {
        console.log(name, pass)
        if (password && nickname) {
            form.current.name = name
            form.current.pass = pass
            console.log(form.current)

            // set giá trị đã đăng nhập thành true, bước này phải thay thế bằng việc kiểm tra localStorage
            onOK()
            onShowToast("success","Đăng nhập thành công!!")
            localStorage.setItem("accessToken", true)
            // chuyển hướng về trang cũ
            navigate((data ? data.path : "/"))
        }else{
            onShowToast("error","Sai tài khoản hoặc mật khẩu!!")
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formGroup}>
                <h1>Login</h1>
                <LoginInput
                    mode={"main"}
                    trueAnswer={["tk"]}
                    placeholder={"Tên đăng nhập hoặc email"}
                    // autoTrue={true}
                    checkFalse={() => checkFalse(setPassword)}
                    checkTrue={() => checkTrue(setPassword)}
                    setString={(value) => pickValue(setName, value)}
                />
                <LoginInput
                    mode={"main"}
                    trueAnswer={["mk"]}
                    placeholder={"Mật khẩu"}
                    // autoTrue={true}
                    checkFalse={() => checkFalse(setNickname)}
                    checkTrue={() => checkTrue(setNickname)}
                    setString={(value) => pickValue(setPass, value)}
                />
                <button onClick={submit} className={styles.submit}>Submit</button>
            </div>
        </div>
    );
}

export default MainLogin;