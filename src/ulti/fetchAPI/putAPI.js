const putAPI = (api, id, data) => {
    fetch(api + "/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            
        })
        .catch(error => {
            // console.error('There was an error:', error);
        });
}

export default putAPI