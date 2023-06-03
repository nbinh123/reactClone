import React, { useEffect, useRef, useState } from "react";
import styles from "./body.module.scss"
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

import getAPI from "../../ulti/fetchAPI/getAPI";
import postAPI from "../../ulti/fetchAPI/postAPI";
import putAPI from "../../ulti/fetchAPI/putAPI";
import deleteAPI from "../../ulti/fetchAPI/deleteAPI";
import findAPI from "../../ulti/fetchAPI/findAPI";

import readDB from "../../express/CRUD/readDB";
import Toast from "../toast-ui/Toast";
import HomePage from "../body/pages/homepage/HomePage"
import Class from "./pages/class/Class"
import Topic from "../body/pages/topic/Topic"
import Contact from "../body/pages/contact/Contact"
import Music from "./pages/music/Music";
import CreateMusic from "./pages/music/create/CreateMusic";
import Podcast from "./pages/podcast/Podcast";
import Profile from "./pages/profile/Profile";
import Life from "./pages/life/Life"
import Love from "./pages/love/Love"
import Confession from "./pages/confession/Confession";
import ShowConfession from "./pages/confession/show/ShowConfession";
import Diary from "./pages/diary/Diary";
import Shopping from "./pages/shopping/Shopping";
import CreateProduct from "./pages/shopping/create/CreateProduct";
import CreatePodcast from "./pages/podcast/create/CreatePodcast";
import CreateConfession from "./pages/confession/create/CreateConfession";
import EditProduct from "./pages/shopping/edit/EditProduct";
import Cart from "./pages/shopping/cart/Cart";
import FavourtieProduct from "./pages/shopping/favourite/FavouriteProduct";
import Login from "./pages/login/Login";
import Payment from "./pages/shopping/cart/payment/Payment";
import Reward from "./pages/rewards/Reward";
function MainBody({onWatchingChangeLogin}) {

    const mainRef = useRef()
    const [userList, setUserList] = useState([])
    const [cartList, setCartList] = useState([])
    const [paymentList, setPaymentList] = useState([])
    const [messageList, setMessageList] = useState([])
    const [change, setChange] = useState(false)
    const [changeMessage, setChangMessage] = useState(false)
    const [changePayment, setChangePayment] = useState(true)
    const [userLogin, setUserLogin] = useState(false)
    useEffect(() => {
        
    },[])
    // component này sẽ bao bọc element cần xác thực khi điều hướng, nếu người dùng chưa đăng nhập, chuyển về trang login
    function RequireAuth({ children }) {

        const location = useLocation();
        const [change, setChange] = useState(false)

        return !localStorage.getItem("accessToken") ? (
            <Navigate to="/login" replace state={{ path: location.pathname }} />
        ) : (
            children
        );
    }

    const submitLogin = () => {
        localStorage.setItem("accessToken", true)
    }

    const reRender = () => {
        setChange(!change)
    }

    const reRenderPayment = () => {
        setChangePayment(!changePayment)
    }
    const reRenderMesage = () => {
        setChangMessage(!changeMessage)
    }

    useEffect(() => {
        readDB("confession/api/get", 3001, setMessageList)
    }, [changeMessage])

    useEffect(() => {
        fetch("http://localhost:2222/cartList")
            .then(res => res.json())
            .then(data => {
                let list = data.filter(cart => cart.quanlity !== 0)
                setCartList(list)
            })
    }, [change])

    useEffect(() => {
        fetch("http://localhost:2222/paymentFruits")
            .then(res => res.json())
            .then(data => {
                let list = data.filter(cart => ((cart.quanlity !== 0) && (cart.tick === true)))
                setPaymentList(list)
            })
    }, [changePayment])

    const reRenderLogin = () => {

    }


    //làm toast
    const [toastType, setToastType] = useState("info")
    const [toastMessage, setToastMessage] = useState("Chào mừng bạn đã quay trở lại!")
    const [toast, setToast] = useState(false)
    const watchLogin = () => {
        
    }
    const showToast = (type, message) => {
        setToastType((type ? type : "success"))
        setToastMessage((message ? message : "MSG mặc định"))
        setToast(!toast)
    }
    // useEffect(() => {

    // }, [toast])
    return (
        <div className={styles.main} ref={mainRef}>
            <Toast type={toastType} message={toastMessage} reShow={toast} />
            {/* Truyền prop này vào để thực hiện showToast mỗi khi cần:
        ======> onShowToast={(type, message) => showToast(type, message)} */}
            <Routes>
                <Route path='/login' element={<Login onWatchingChangeLogin={(boolean, setState) => onWatchingChangeLogin(boolean, setState)} onOK={submitLogin} onShowToast={(type, message) => showToast(type, message)} />} />


                <Route path='/' element={<HomePage />} />
                <Route path='/reward' element={<Reward />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/life" element={<Life />} />
                <Route path="/love" element={<Love />} />
                <Route path="/diary" element={<RequireAuth children={<Diary />} />} />
                <Route path='/class' element={<Class data={userList} />} />
                <Route path='/topic' element={<Topic />} />
                <Route path='/cart' element={<Cart list={cartList} onChanging={reRenderPayment} />} />
                <Route path='/payment' element={<Payment list={paymentList} onShowToast={(type, message) => showToast(type, message)} />} />

            //music
                <Route path="/music" element={<Music />} />
                <Route path='/music/create' element={<CreateMusic />} />

            //podcast
                <Route path='/podcast' element={<Podcast />} />
                <Route path='/podcast/create' element={<CreatePodcast />} />

            //confession
                <Route path="/confession" element={<Confession list={messageList} />} />
                <Route path="/confession/create" element={<CreateConfession onShowToast={(type, message) => showToast(type, message)} onChanging={reRenderMesage} />} />
                <Route path="/confession/show/:id" element={<RequireAuth children={<ShowConfession onShowToast={(type, message) => showToast(type, message)} list={messageList} onChanging={reRenderMesage} />} />} />

            //shop
                <Route path='/shop' element={<Shopping onChangee={reRender} />} />
                <Route path='/shop/create' element={<CreateProduct />} />
                <Route path='/shop/edit' element={<EditProduct />} />
                <Route path='/shop/favourite' element={<FavourtieProduct />} />


                <Route path='/contact' element={<RequireAuth children={< Contact />} />} />


            </Routes >
        </div>);
}


export default MainBody;