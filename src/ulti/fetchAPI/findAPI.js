const findAPI = (api, setState, id) => {
    fetch(api + "/" + id)
        .then(res => res.json())
        .then(data => {
            if(data.quanlity !== 0){
                setState(data)
            }
        })
}

export default findAPI