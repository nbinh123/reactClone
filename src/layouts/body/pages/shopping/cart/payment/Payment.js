import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styles from "./payment.module.scss"
import { Link, useNavigate } from "react-router-dom";

import Back from "../../../../../back-button/Back";
import Product from "../../products/Product";

function Payment({ list = [], onShowToast }) {

    const [total, setTotal] = useState(0)
    const [change, setChange] = useState(false)

    const totalRef = useRef(0)

    const convertToVND = (price) => {
        var array = []
        var newArray = []
        var A = []
        var result = []
        var num = price*24000
        var abc = num.toString()
        //            11.268.251
        for (var value of abc) {
            array.push(value)
        }
        var l = array.length
        var a = Math.floor(l / 3)
        var b = l % 3
        for (i = 0; i < a; i++) {
            //0,1 => 2
            var le = array.length
            var u = array.splice(le - 3, le)
            newArray.push(u)
            //         console.log(i)
        }
        if (b != 0) {
            var c = array.splice(0, b)
            newArray.push(c)
        }
        var zzz = newArray.length
        for (var i = zzz - 1; i >= 0; i--) {
            A.push(newArray[i])
        }
        for (var z of A) {
            result.push([z.join("")])
        }
        return (result.join("."))
    }

    const getTotalPrice = () => {
        let total = 0
        list.forEach((prod, index) => {
            total += list[index].totalPrice
        })
        totalRef.current = total
    }

    const handlePay = () => {
        onShowToast("warning","Số tiền trong tài khoản của quý khách không đủ")
    }

    useEffect(() => {
        const vnd = convertToVND(totalRef.current)
        setTotal(vnd)
    })

    return (
        <div className={styles.container}>
            <Back path={"/cart"} />
            <div className={styles.show}>
                <table class="table">
                    <thead>
                        <tr className={styles.tr}>
                            <th onClick={getTotalPrice()} scope="col">#</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Tổng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((product, index) => {

                            return (
                                <tr className={styles.tr}>
                                    <th className={styles.index} scope="row">{index + 1}</th>
                                    <td className={styles.nameProd}>{product.name}</td>
                                    <td className={styles.priceProd}>{product.price}$</td>
                                    <td className={styles.quanlityProd}>{product.quanlity}</td>
                                    <td className={styles.totalProd}>
                                        <span>{product.totalPrice}$</span>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr className={styles.total}>
                            <th colSpan="4">Tổng cộng: </th>
                            <th>{totalRef.current}$</th>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.submit}>

                    <div className={styles.payBtn}>
                        <button onClick={handlePay}>
                            Thanh toán
                            <p>{total + "đ"}</p>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Payment;