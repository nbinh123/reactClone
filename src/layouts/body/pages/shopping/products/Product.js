import React, { useEffect } from "react";
import styles from "./product.module.scss"
import { useState, useRef } from "react";
import clsx from "clsx"
import { Link } from 'react-router-dom';

import deleteAPI from "../../../../../ulti/fetchAPI/deleteAPI";
import putAPI from "../../../../../ulti/fetchAPI/putAPI"
import postAPI from "../../../../../ulti/fetchAPI/postAPI";
import findAPI from "../../../../../ulti/fetchAPI/findAPI";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCartPlus, faCartShopping, faHeart, faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons"
import getAPI from "../../../../../ulti/fetchAPI/getAPI";


function Product({ name, price, img, vnd, id, onChangingChild, onChanging }) {

    const modalRef = useRef()

    const [like, setLike] = useState(false)
    const [change, setChange] = useState(false)
    const [add, setAdd] = useState(true)
    const [quanlity, setQuanlity] = useState(0)
    const [defaultQuanlity, setDefaultQuanlity] = useState([])

    const quanlityRef = useRef()

    useEffect(() => {
        findAPI("http://localhost:2222/cartList", setDefaultQuanlity, id)
    }, [])

    const handleLikeToggle = () => {
        setLike(!like)
        console.log(like)
    }

    const handleDelete = (id) => {
        deleteAPI("http://localhost:2222/products", id)
        onChangingChild(!change)
    }

    const handleEdit = (id) => {
        putAPI()
    }

    const handleAddProduct = () => {
        setAdd(false)
    }

    const handleSubmitProducts = () => {
        setAdd(false)
        setQuanlity(0)
        handleAddCart()
    }

    const getData = () => {
        let data = {
            name: `${name}`,
            quanlity: Number(quanlity),
            price: Number(price),
            totalPrice: `${quanlity === 0 ? 0 : Math.floor((quanlity * price))}$`,
            img: img
        }
        return data
    }

    const handleAddCart = (id) => {
        onChanging()
        onChangingChild(!change)
        setAdd(true)
        let data = getData()
        console.log(data)
        putAPI("http://localhost:2222/cartList", id, data)
    }

    const increaseQuanlity = () => {
        setQuanlity(quanlity + 1)
    }

    const decreaseQuanlity = () => {
        if (quanlity >= 1) {
            setQuanlity(quanlity - 1)
            console.log(quanlity)
        } else {
            setAdd(true)
        }
    }

    return (
        <div className={styles.product}>
            <div className={styles.header}>
                <div
                    className={clsx(styles.favourite, {
                        [styles.like]: like,
                        [styles.unlike]: !like
                    })}
                    onClick={handleLikeToggle}>
                    <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                </div>
                <Link>
                    <img alt="lỗi" src={img} className={styles.img}></img>
                </Link>
            </div>
            <div className={styles.body}>
                <p>{name}</p>
                <p>{price}$</p>
                <div className={styles.crud}>
                    <button data-toggle="modal" data-target="#deleteModal" className={styles.deleteIcon}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                    <Link to={"edit"}>
                        <button className={styles.editIcon} onClick={() => handleEdit(id)}>Edit</button>
                    </Link>
                    {add ?
                        <button onClick={handleAddProduct} className={styles.addIcon}>
                            <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                        :
                        <div className={styles.del}>
                            <button onClick={decreaseQuanlity} className={styles.quanlityTools} >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <button
                                onClick={() => handleAddCart(id)}
                                ref={quanlityRef}
                                className={[styles.addIcon, styles.delete].join(" ")}
                            // data-toggle="modal" data-target="#addCartModal"
                            // mở cái này để bật modal
                            >
                                {quanlity}
                            </button>
                            <button onClick={increaseQuanlity} className={styles.quanlityTools} >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    }
                </div>
            </div>




            {/* modal */}
            {/*-- attr data-target là id của modal được hiện lên, data-target của nút bấm trùng với id của modal--*/}
            <div ref={modalRef} class="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Thông báo!!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn muốn xóa cái này thật sao🥺🥺🥺
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-dismiss="modal">Không</button>

                            <Link to={"/music"} onClick={() => handleDelete(id)}>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">Xóa</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
            <div ref={modalRef} class="modal fade" id="addCartModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Thông báo!!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Bạn có chắc muốn thêm sản phẩm này vào giỏ hàng?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Không</button>
                            <button type="button" class="btn btn-success" data-dismiss="modal" aria-label="Close">Đúng vậy</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Product;