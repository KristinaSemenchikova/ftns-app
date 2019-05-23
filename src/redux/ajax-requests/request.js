import axios from 'axios';


export let getProductData = (productName) => {
return axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${productName}`,
{
    headers: {
        'x-app-id': '781bf2ab',
        'x-app-key': 'd244a9cb0b9bfd1879dcc79d3a71e034',
    }
})
}

