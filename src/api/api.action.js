import { toast } from 'react-toastify';
import axios from 'axios';

export const apiRequest = (baseUrl, data) => {
    axios
        .post(baseUrl, data)
        .then((res) => {
            toast.success(`${res.data.message}`);
        })
        .catch((err) => {
            toast.error(`${err.response.data.errors[0].message}`);
        });
};
