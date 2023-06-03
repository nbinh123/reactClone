import React, { useRef, useEffect, useState } from "react";
import styles from "./class.module.scss"


import { Link } from 'react-router-dom';
import TagName from "./tag-name/TagName";
// import Tippy from '@tippyjs/react'
import Tippy from '@tippyjs/react/headless'
import BackButton from "../../../back-button/Back";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import getAPI from "../../../../ulti/fetchAPI/getAPI";

function Class({}) {

    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        getAPI("http://localhost:2222/students", setDataArray)
    }, [])
    console.log(dataArray)

    return (
        <div className={styles.container}>
            <BackButton path={"/"} />
            {dataArray.map((data, index) => (
                <TagName 
                    key={index}
                    name={data.name}
                    sex={data.sex}
                    img={data.img}
                    description={data.description}
                    hobby={data.hobby}
                />))}
        </div>);
}

export default Class;