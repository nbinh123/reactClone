import React from "react";
import styles from "./createProduct.module.scss"
import { useState, useRef, useEffect } from "react";
import postAPI from "../../../../../ulti/fetchAPI/postAPI";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

import Back from "../../../../back-button/Back"

function CreateProduct() {

    const nameRef = useRef()
    const imgRef = useRef()
    const priceRef = useRef()
    const quanlityRef = useRef()

    const rule = {}

    const getValueOfInput = () => {
        let data = {
            name: nameRef.current.value,
            img: imgRef.current.value,
            price: priceRef.current.value,
            quanlity: quanlityRef.current.value
        }

        return data
    }

    const createProduct = () => {
        //đầu tiên sẽ lấy dữ liệu từ input 
        //sau đó sẽ dùng phương thức post trong fetch để post thêm dữ liệu lên api
        //trường id sẽ tự được thêm vào
        //dữ liệu input sẽ là ref.current.value
        let data = getValueOfInput()

        postAPI("http://localhost:2222/products",data)





        // fetch('http://localhost:2222/products', {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.error('There was an error:', error);
        //     });
    }

    return (
        <div className={styles.container}>
            <Back path={"/shop"} />
            <div className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Tên:</label>
                    <input ref={nameRef} placeholder="Tên sản phẩm"></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Ảnh minh họa:</label>
                    <input ref={imgRef} placeholder="Link ảnh minh họa 1:1"></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Giá bán:</label>
                    <input ref={priceRef} placeholder="Giá bán"></input>
                </div>
                <div className={styles.formGroup}>
                    <label>Số lượng:</label>
                    <input ref={quanlityRef} placeholder="Số lượng"></input>
                </div>
                <Link to={"/shop"}>
                    <div className={styles.addBtn}>
                        <button onClick={createProduct}>Thêm</button>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default CreateProduct;