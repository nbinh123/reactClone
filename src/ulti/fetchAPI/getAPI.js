const getAPI = (api, setState) => {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            setState(data)
        })
}

export default getAPI