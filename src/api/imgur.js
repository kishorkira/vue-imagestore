import qs from 'qs';
const CLIENT_ID ='a59921ffc43dc2f';
const CLIENT_SECRETE = '310736319b1ccce3fb61bd283f2b7f3ebf7b22c7';
const ROOT_URL ='http://api.imgur.com';

export default {
    login(){
        const queryString ={
            client_id : CLIENT_ID,
            response_type : 'token'
        };
        window.location =`${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    }
};