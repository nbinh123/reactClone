import React, { useEffect, useState, useRef } from "react";
import styles from "./cart.module.scss"

import Back from "../../../../back-button/Back";
import getAPI from "../../../../../ulti/fetchAPI/getAPI";

import { Link } from "react-router-dom";

import CartTag from "./cart-tag/CartTag";

function Cart({ list = [], onChanging }) {

    const reRender = (callback) => {
        
    }
    useEffect(() => {
        console.log(list)
    },[])

    return (
        <div className={styles.container}>
            <Back path={"/shop"} />
            <div className={styles.cartList}>
                {list.map(cart =>
                    <CartTag
                        onChanging={reRender}
                        name={cart.name}
                        quanlity={cart.quanlity}
                        price={cart.price}
                        totalPrice={cart.totalPrice}
                        img={cart.img}
                        key={cart.id}
                        id={cart.id}
                    />
                )}
            </div>
            <div className={styles.submit}>
                <Link to={"/payment"}>
                    <div>
                        <button onClick={() => onChanging()}>
                            Đi tới trang thanh toán
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Cart;