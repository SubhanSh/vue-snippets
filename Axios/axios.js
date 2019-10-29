//GET method
async search(event) {
    text = 'something';

    try {
        const response = await axios.get(API_BASE_URL + '/products?text=' + text);
        //handle success
    } catch (error) {
        //handle error
        console.log(error.response.data); //error message
    }
}

//POST method
async search(event) {
    text = 'something';

    try {
        const response = await axios.post(API_BASE_URL + '/products', {
            text: 'something'
        });
        //handle success
    } catch (error) {
        //handle error
        console.log(error.response.data); //error message
    }
}