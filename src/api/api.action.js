import {toast} from "react-toastify";
import axios from 'axios';

export const apiRequest = (baseUrl, data) =>{
    axios
        .post(baseUrl, data)
        .then((res) => {
            toast.success('please search for a fact');
            console.log(res, 'the response');
        })
        .catch((err) => {
            toast.error(`${err.response.data.errors[0].message}`);

        });
}