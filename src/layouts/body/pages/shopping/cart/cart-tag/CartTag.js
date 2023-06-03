import React, { useEffect, useState } from "react";
import styles from "./cartTag.module.scss"
import clsx from "clsx"

import putAPI from "../../../../../../ulti/fetchAPI/putAPI";
import getAPI from "../../../../../../ulti/fetchAPI/getAPI";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCartPlus, faCartShopping, faCheck, faHeart, faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons"
import postAPI from "../../../../../../ulti/fetchAPI/postAPI";

function CartTag({ name, quanlity, price, totalPrice, img, id }) {

    const [change, setChange] = useState(false)
    const [newQuanlity, setNewQuanlity] = useState(quanlity)
    const [newTotalPrice, setNewTotalPrice] = useState(totalPrice)
    const [tick, setTick] = useState(false)

    const decreaseQuanlity = () => {
        if (newQuanlity > 0) {
            setTick(false)
            handleRenderPrice()
            setNewQuanlity(newQuanlity - 1)
            setChange(!change)
        }
    }

    const increaseQuanlity = () => {
        setTick(false)
        handleRenderPrice()
        setNewQuanlity(newQuanlity + 1)
        setChange(!change)
    }

    const handleRenderPrice = () => {
        setNewTotalPrice(newQuanlity * price)
    }

    const getData = () => {
        let data = {
            name: name,
            quanlity: (!tick ? 0 : newQuanlity),
            price: price,
            totalPrice: (!tick ? 0 : newTotalPrice),
            img: img,
            tick: tick
        }
        return data
    }

    const putToPayment = (id) => {
        putAPI("http://localhost:2222/paymentFruits", id, getData())
    }

    const toogleTick = () => {
        setTick(!tick)
    }

    useEffect(() => {
        putToPayment(id)
    },[tick])

    useEffect(() => {
        handleRenderPrice()
    }, [newQuanlity])

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={img}></img>
            </div>
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>{name === "Chuối" ? `${price}$ /buồng` : `${price}$ /kg`}</p>
                <span className={styles.t}>
                    Tổng:
                    <p className={styles.total}> {`${newTotalPrice}$`}</p>
                </span>
                <div className={styles.tools}>
                    <button className={styles.deleteProduct}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                    <div className={styles.changeQuanlity}>
                        <button onClick={decreaseQuanlity} className={styles.quanlityTools} >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button
                            className={styles.quanlityTools}
                        // data-toggle="modal" data-target="#addCartModal"
                        // mở cái này để bật modal
                        >
                            {newQuanlity}
                        </button>
                        <button onClick={increaseQuanlity} className={styles.quanlityTools} >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                    <button onClick={toogleTick} className={clsx(styles.submit, {
                        [styles.bgTick]: tick,
                        [styles.bgUnTick]: !tick
                    })}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartTag;