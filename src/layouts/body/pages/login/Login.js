import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { unstable_HistoryRouter } from "react-router-dom";
import styles from "./login.module.scss"
import LoginInput from "./LoginInput";
import Radio from "./Radio";
import ExtraLogin from "./ExtraLogin";
import MainLogin from "./MainLogin";

function Login({ onOK, onShowToast, onWatchingChangeLogin }) {

    return (
        <div>
            {/* 
                Khi dùng chức năng xác thực và phân quyền cho người dùng, sử dụng localStorage --> check accessToken 
                vì nó sẽ lưu vào bộ nhớ, khi reload lại trang sẽ không mất accessToken
            */}
            <MainLogin onOK={onOK} onShowToast={(type, message) => onShowToast(type, message)} />
            {/* <ExtraLogin onOK={onOK} onShowToast={(type, message) => onShowToast(type, message)}/> */}
        </div>
    );
}

export default Login;