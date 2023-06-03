import React, { useEffect } from "react";
import styles from "./contact.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby, faEnvelope, faPhone, faXRay } from "@fortawesome/free-solid-svg-icons";

//<FontAwesomeIcon icon={faInstagram} />
//brands thì phải tự import ^.^
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Back from "../../../back-button/Back";

function Contact() {
    useEffect(() => {
        fetch('http://ip-api.com/json/?fields=61439')
            .then(res => res.json())
            .then(res => console.log(res))
    }, [])
    return (
        <div className={styles.contact}>
            <Back path={"/"} />
            <div>
                <div className={[styles.dFlex, styles.header].join(" ")}>
                    <div>
                        <img src="https://nhadepso.com/wp-content/uploads/2023/01/hinh-trai-tim-dep_1.jpg" alt="lỗi" className={styles.img}></img>
                    </div>
                    <div className={[styles.center, styles.name].join(" ")}>
                        <h1>Nguyễn Văn Nguyên Bình</h1>
                    </div>
                </div>
                <div className={styles.info}>
                    <a className={styles.tag} target="_blank"  href="https://www.facebook.com/nguyenbinh.nguyenvan.522">
                        <div className={[styles.facebook, styles.icon, styles.dFlex].join(" ")}>
                            <FontAwesomeIcon icon={faFacebook} className={styles.iconInside} />
                            Nguyễn Văn Nguyên Bình
                        </div>
                    </a>
                    <a className={styles.tag} target="_blank"  href="https://www.instagram.com/baoduyphandong222/">
                        <div className={[styles.instagram, styles.icon, styles.dFlex].join(" ")}>
                            <FontAwesomeIcon icon={faInstagram} className={styles.iconInside} />
                            badienbakhung123
                        </div>
                    </a>
                    <a className={styles.tag} target="_blank" >
                        <div className={[styles.phone, styles.icon, styles.dFlex].join(" ")}>
                            <FontAwesomeIcon icon={faPhone} className={styles.iconInside} />
                            0123456789
                        </div>
                    </a>
                    <a className={styles.tag} target="_blank" >
                        <div className={[styles.email, styles.icon, styles.dFlex].join(" ")}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.iconInside} />
                            nbinh12blog@gmail.com
                        </div>
                    </a>
                </div>
            </div>
        </div>);
}

export default Contact;