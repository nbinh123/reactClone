import React, { useEffect, useState, useLayoutEffect } from "react";
import styles from "./shopping.module.scss"
import { Link } from 'react-router-dom';
import getAPI from "../../../../ulti/fetchAPI/getAPI";
import readDB from "../../../../express/CRUD/readDB";

import getAxios from "../../../../axiosFetch/getAxios";

import Tippy from '@tippyjs/react/headless'
import Product from "./products/Product";
import Back from "../../../back-button/Back";

function Shopping({ onChangee }) {

    const [products, setProducts] = useState([])
    const [change, setChange] = useState(false)
    const [limit, setLimit] = useState(0)
    const [minimum, setMinimum] = useState(0)


    const watchChanging = (boolean) => {
        setChange(boolean)
    }

    const [haha, setHaha] = useState([])
    useEffect(() => {
        getAxios("/product/api/filter", { limit: limit, minimum: minimum }, setProducts)
    }, [limit, minimum])


    useEffect(() => {
        readDB("product/api/get", 3001, setProducts)
    }, [change])

    return (
        <div className={styles.container}>
            <Tippy
                placement="bottom"
                interactive={true}
                // visible={true}
                offset={[0, 0]}
                render={attr => (
                    <div tabIndex="-1" {...attr} className={styles.filterItems}>
                        <div onClick={() => {setLimit(2);setMinimum(0)}} className={styles.filterItem}>
                            <p>Dưới 2$</p>
                        </div>
                        <div onClick={() => {setLimit(7);setMinimum(2)}} className={styles.filterItem}>
                            <p>Từ 2$ - 7$</p>
                        </div>
                        <div onClick={() => {setLimit(999);setMinimum(7)}} className={styles.filterItem}>
                            <p>Từ 7$ trở lên</p>
                        </div>
                        <div onClick={() => {setLimit(999);setMinimum(0)}} className={styles.filterItem}>
                            <p>Tất cả</p>
                        </div>
                    </div>
                )}
            >
                <div className={styles.filter}>
                    <p>Lọc tìm kiếm</p>
                </div>
            </Tippy>
            <Link to={"/cart"}>
                <div className={styles.showCart}>
                    <button>
                        Xem giỏ hàng
                    </button>
                </div>
            </Link>
            <Link to={"/shop/favourite"}>
                <div className={styles.favouriteCart}>
                    <button>
                        Yêu thích
                    </button>
                </div>
            </Link>
            <div className={styles.products}>
                {products.map((product, index) =>
                    <Product
                        onChanging={onChangee}
                        onChangingChild={watchChanging}
                        key={index}
                        name={product.name}
                        price={product.price}
                        img={product.img}
                        id={product.id}
                    />
                )}
            </div>
            <div className={styles.createProduct}>
                <Link to={"/shop/create"}>
                    <button >
                        Create
                    </button>
                </Link>
            </div>
        </div>);
}

export default Shopping;