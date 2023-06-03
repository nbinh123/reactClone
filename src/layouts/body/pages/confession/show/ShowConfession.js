import React, { useEffect, useRef, useState } from "react";
import styles from "./showConfession.module.scss"

import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faMinus, faX } from "@fortawesome/free-solid-svg-icons";

import deleteDB from "../../../../../express/CRUD/deleteDB";
import readDB from "../../../../../express/CRUD/readDB";
import Back from "../../../../back-button/Back";

{
    // function ShowConfession({ from, to, message, _id, onChanging }) {

    //     let numRef = useRef([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

    //     const handleDelete = () => {
    //         deleteDB(`confession/api/delete`, 3001, `?id=${_id}`)
    //         onChanging()
    //     }

    //     return (
    //         <div className={styles.container}>

    //             <Link to={"/confession"}>
    //                 <div>
    //                     <button onClick={handleDelete} className={styles.delete}>
    //                         <FontAwesomeIcon icon={faX} />
    //                     </button>
    //                 </div>
    //             </Link>

    //             <Back path={"/confession"} />
    //             <div>
    //                 <div className={styles.header}>
    //                     <div className={styles.from}>
    //                         <p>{from ? from : "Ai đó khum biết"}</p>
    //                     </div>
    //                     <div className={styles.icon}>
    //                         <FontAwesomeIcon className={styles.envelop} icon={faEnvelope} />
    //                         {numRef.current.map(num => <FontAwesomeIcon className={styles.minus} icon={faMinus} />)}<FontAwesomeIcon className={styles.minus} icon={faArrowRight} />
    //                     </div>
    //                     <div className={styles.to}>
    //                         <p>{to}</p>
    //                     </div>
    //                 </div>
    //                 <div className={styles.body}>
    //                     <div>
    //                         <p>
    //                             {message}
    //                         </p>
    //                         <p>
    //                             {_id}
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>
    //     );
    // }
}

// {numRef.current.map(num => <FontAwesomeIcon className={styles.minus} icon={faMinus} />)}<FontAwesomeIcon className={styles.minus} icon={faArrowRight} />
function ShowConfession({ list = [], onChanging, onShowToast }) {

    let numRef = useRef([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

    const { id } = useParams()

    const [data, setData] = useState([])

    const handleDelete = () => {
        deleteDB(`confession/api/delete`, 3001, `?id=${id}`)
        onShowToast("success","Xóa confession thành công!!")
        onChanging()
    }

    const findById = () => {
        readDB(`confession/api/show/${id}`, 3001, setData)
        // console.log(id)
    }

    useEffect(() => {
        findById()
    }, [])

    return (
        <div className={styles.container} onClick={() => console.log(data)}>

            <Link to={"/confession"} onClick={handleDelete}>
                <div>
                    <button className={styles.delete}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
            </Link>

            <Back path={"/confession"} />
            <div>
                <div className={styles.header}>
                    <div className={styles.from}>
                        <p>{!data.from ? "" : data.from}</p>
                    </div>
                    <div className={styles.icon}>
                        <FontAwesomeIcon className={styles.envelop} icon={faEnvelope} />
                        {numRef.current.map((num, index) => <FontAwesomeIcon key={index} className={styles.minus} icon={faMinus} />)}<FontAwesomeIcon className={styles.minus} icon={faArrowRight} />
                        {/* gắn numRef vào đây */}
                    </div>
                    <div className={styles.to}>
                        <p>{data.to}</p>
                    </div>
                </div>
                <div className={styles.body}>
                    <div>
                        <p>
                            {data.message}
                        </p>
                        <p>
                            {data._id}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowConfession;