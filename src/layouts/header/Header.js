import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useEffect, useState } from 'react';
import styles from "./header.module.scss"
import { Link } from 'react-router-dom';
// import Tippy from '@tippyjs/react'
import Tippy from '@tippyjs/react/headless'

import Search from './searchComponent/Search';
import Language from './Language/Language';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCircle, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

function Header({onWatchingChangeLogin}) {
    const [showTooltip, setShowtooltip] = useState(false)
    const [change, setChange] = useState(false)
    let handleShow = () => {
        setShowtooltip(true)
    }
    let handleHide = () => {
        setShowtooltip(false)
    }
    const logout = () => {
        localStorage.removeItem("accessToken")
        setChange(!change)
    }
    return (
        <div className={[styles.navBar, styles.dFlex].join(" ")}>
            <div className={[styles.homepage, styles.tools].join(" ")}>
                <Link to="/" className={[styles.tools, styles.home].join(" ")}>Nbinh's blog</Link>
            </div>
            <div className={[styles.dFlex, styles.tool2].join(" ")}>
                <div className={[styles.tool].join(" ")}>
                    <Link to="/" className={[styles.tools].join(" ")}>Home</Link>
                </div>
                <div className={[styles.tool].join(" ")}>
                    <Link to='/contact' className={[styles.tools].join(" ")}>Contact</Link>
                </div>
                <div className={[styles.tool].join(" ")}>
                    <Link to="/class" className={[styles.tools].join(" ")}>Class</Link>
                </div>
                <div className={[styles.tool].join(" ")}>
                    <Link to="/topic" className={[styles.tools].join(" ")}>Topic</Link>
                </div>
            </div>
            <Search />
            <div className={[styles.dFlex, styles.tool3].join(" ")}>
                <Tippy
                    visible={showTooltip}  //set thuộc tính ẩn/hiện
                    arrow={true}
                    placement="bottom"  //set hướng render
                    offset={[0, 10]}  //set khoảng cách so với phần tử cha offset={[x,y]}
                    onClickOutside={handleHide}
                    interactive={true}  //set việc cho phép người dùng tác động lên tooltip
                    render={attr => (
                        <div tabIndex="-1" {...attr} className={styles.wrapper}>
                            <Link to="/life" className={[styles.toolTag, styles.toolTips].join(" ")}>Đời sống</Link>
                            <Link to="/love" className={[styles.toolTag, styles.toolTips].join(" ")}>Trò chơi</Link>
                            <Link to="/music" className={[styles.toolTag, styles.toolTips].join(" ")}>Âm nhạc</Link>
                            <Link to="/shop" className={[styles.toolTag, styles.toolTips].join(" ")}>Mua sắm</Link>
                            <Link to="/confession" className={[styles.toolTag, styles.toolTips].join(" ")}>Confession</Link>
                            <Link to="/diary" className={[styles.toolTag, styles.toolTips].join(" ")}>Nhật kí </Link>
                            <Link to="/podcast" className={[styles.toolTag, styles.toolTips].join(" ")}>Podcast </Link>
                            <Link to="/reward" className={[styles.toolTag, styles.toolTips].join(" ")}>Đổi thưởng </Link>
                        </div>
                    )}
                >
                    <div className={styles.change}>
                        <div onClick={handleShow} className={[styles.tool, styles.pc].join(" ")}>
                            <div className={[styles.tools, styles.contact].join(" ")}>More</div>
                        </div>
                        <div onClick={handleShow} className={[styles.tool, styles.mobile].join(" ")}>
                            <div className={[styles.tools, styles.contact].join(" ")}>
                                <FontAwesomeIcon className={styles.icon} icon={faBars} />
                            </div>
                        </div>
                    </div>
                </Tippy>
                <div className={[styles.tool, styles.profile].join(" ")}>
                    <FontAwesomeIcon icon={faBell} />
                    {!localStorage.getItem("accessToken")
                        ?
                        <Link to="/login" className={[styles.tools, styles.contact].join(" ")}>
                            <p>Login</p>
                        </Link>
                        :
                        <Tippy
                            interactive={true}
                            offset={[0,13]}
                            render={attr => (
                                <div tabIndex="-1" {...attr} className={styles.userTool}>
                                    <div onClick={logout} className={[styles.userTippy, styles.logout].join("")}>
                                        <FontAwesomeIcon className={styles.icon} icon={faPowerOff}/>
                                        <p>Logout</p>
                                    </div>
                                    <div className={[styles.userTippy, styles.setting].join("")}>
                                        <FontAwesomeIcon className={styles.icon} icon={faGear}/>
                                        <p>Setting</p>
                                    </div>
                                </div>
                            )}>
                            <div className={styles.userAvatar}>
                                <img className={styles.img} src='https://drive.google.com/uc?export=view&id=17x0c_KZg_zpTTrKEyE1TlsKyVLsS_2BX'></img>
                            </div>
                        </Tippy>
                    }
                </div>
                <Language />
            </div>
        </div>
    )
}

export default Header;