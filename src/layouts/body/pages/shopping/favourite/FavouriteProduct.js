import React from "react";
import styles from "./favouriteProduct.module.scss"

import Back from "../../../../back-button/Back";

function FavourtieProduct() {
    return (  
        <div className={styles.container}>
            <Back path={"/shop"} />
            <h1>Favourite</h1>
        </div>
    );
}

export default FavourtieProduct;