import axios from "axios"

function getAxios(url, paramCondition, setState) {
    axios.get(`http://localhost:3001${url}`, {
        params: paramCondition,
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            console.log(response.data);
            setState(response.data)
        })
        .catch(error => {
            console.log(error);
        });
}

export default getAxios