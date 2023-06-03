import React, { useEffect, useState } from "react";
import styles from "./life.module.scss"
import { useParams } from 'react-router-dom'

import getAPI from "../../../../ulti/fetchAPI/getAPI";
import postAPI from "../../../../ulti/fetchAPI/postAPI"


function Life() {

    const [data, setData] = useState()
    const { id } = useParams()

    const d = () => {
        console.log({ id })
    }


    return (
        <div>
            <h1>Life</h1>
            <button onClick={d}>
                fetch api
            </button>
        </div>);
}

export default Life;