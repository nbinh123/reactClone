import React, { useEffect, useRef, useState } from "react";
import styles from "./profile.module.scss"

import getAPI from "../../../../ulti/fetchAPI/getAPI";

function Profile() {
    
    const [city, setCity] = useState({})

    useEffect(() => {
        getAPI("http://ip-api.com/json/?fields=61439",setCity)
    }, [])
    return ( 
    <div className={styles.container}>
        
    </div> );
}

export default Profile;