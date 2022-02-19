import axios from 'axios';


export function sendCart(data) {

    return async (dispatch) => {
        const data1 = {
            "clientId": 1,
            "itemsHard": [
                {
                    "title": "Camiones de jueguete",
                    "unit_price": 30.00,
                    "quantity": 5
                },
                {
                    "title": "Autitos Tomica",
                    "unit_price": 85.00,
                    "quantity": 1
                }
            ]
        }

        const config = {
            url: 'https://demo-pasarela.herokuapp.com/mp',
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json',
            }, data: data
        };

        try {
            console.log('Actions>>>>>>>', data)
            // axios.post('https://demo-pasarela.herokuapp.com/mp', data);
            const payload = await axios(config);
            console.log('Payload', payload.data.url)
            return dispatch({
                type: 'PAGOMER',
                payload: payload.data.url
            })

        } catch (error) {
            console.log('Error>>>>>', error)
        }
    }
}