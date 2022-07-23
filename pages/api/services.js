import axios from 'axios';

export async function apiStatus() {
 /* return axios({
    method: 'GET',
    url: 'https://doar-computador-api.herokuapp.com', {
      params:{
        _limit:10
      }
    }
  })
  try {*/

    const result = await axios.get('https://doar-computador-api.herokuapp.com/', {
      params: {
        _limit: 10
      }
    });
    const data = result.data;

    return {
      data: data  
    }
  //} catch (error) {
  //  console.log("Something went wrong", error);
  //}
}