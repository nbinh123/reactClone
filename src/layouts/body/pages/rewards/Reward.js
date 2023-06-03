import React, { useEffect, useState } from "react";
import styles from "./reward.module.scss"
import getAxios from "../../../../axiosFetch/getAxios";

function Reward({ coin, user}) {

    const [products, setProducts] = useState([])
    useEffect(() => {
        getAxios("/reward/api/show", {}, setProducts)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.products}>
                {products.map((product, index) => {
                    return (
                        <div className={styles.product} key={index}>
                            <div className={styles.img}>
                                <img src={"https://inquatang.vn/wp-content/uploads/2018/07/a.jpg"}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Reward;