import React, { useState, useRef, useEffect } from "react";
import styles from "./search.module.scss"
// import Tippy from '@tippyjs/react'
import Tippy from '@tippyjs/react/headless'
import SearchResult from "./SearchResult";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Search() {

    const [inpValue, setInpValue] = useState("")
    const [searchValue, setSearchValue] = useState([]);
    const [showDeleleBtn, setShowDeleteBtn] = useState(false)
    const [timerId, setTimerId] = useState(null);

    const searchInp = useRef()
    // const delayRef = useRef()

    const hide = () => {
        setInpValue("")
        setShowDeleteBtn(false)
    }

    const handeleDeleteSearchValue = () => {
        setInpValue(" ")
        setShowDeleteBtn(false)
        searchInp.current.focus()
    }

    const setValue = (text) => {
        setInpValue(searchInp.current.value.trim())
        if (text.target.value.trim() === "") {
            setShowDeleteBtn(false)
        } else {
            setShowDeleteBtn(true)
        }
    }
    const handleShowInpValue = () => {
        searchInp.current.focus()
        alert(inpValue.trim())
    }

    useEffect(() => {
        if (inpValue !== "") {
            callAPI()
        }
    }, [inpValue])

    const callAPI = () => {
        if (timerId) {
            clearTimeout(timerId);
        }
        const newTimerId = setTimeout(() => {
            fetch(`http://localhost:3001/product/api/find?name=${inpValue}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    setSearchValue(res)
                })
        }, 600)
        setTimerId(newTimerId)
    }

    return (
        <div className={[styles.tools, styles.search].join(" ")}>
            {/* ở đây sẽ có một thẻ form để lấy dữ liệu người dùng */}
            <Tippy
                visible={searchValue.length > 0 && showDeleleBtn}
                interactive={true}
                placement="bottom-start"
                render={attr => (
                    <div tabIndex="-1" {...attr}>
                        {searchValue.map((user, index) => {
                            if (index <= 40) {
                                return <SearchResult
                                    key={user.id}
                                    img={user.img}
                                    name={user.name}
                                    price={user.price}
                                    onReRender={hide}
                                />
                            }
                        })}
                    </div>)}
            >
                <input type="text" className={styles.searchInp}
                    onChange={setValue}
                    ref={searchInp}
                    value={inpValue}
                ></input>
            </Tippy>
            <Tippy
                placement="bottom"
                render={attr => (<div tabIndex="-1" {...attr}>Ket qua</div>)}
            >
                <button placeholder="Tìm kiếm" type="submit" className={styles.submit} onClick={handleShowInpValue}>Search</button>
            </Tippy>
            {showDeleleBtn && <div className={styles.deleteBtn} onClick={handeleDeleteSearchValue}><FontAwesomeIcon icon={faX} /></div>}

        </div>);
}

export default Search;