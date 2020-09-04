import React, { useState } from 'react';
import Register from './register';
import uuid from 'react-uuid';

import { baseUrl } from '../../config/config';
import {apiRequest} from "../../api/api.action";


const RegisterView = ({}) => {
    const [user, setUser] = useState({
        campaignUuid: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = user;
        const randomUUID = uuid();
        const jsonData = {
            campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
            data: {
                firstName,
                lastName,
                email,
                password,
            },
        };
       apiRequest(baseUrl, jsonData)

    };

    const { firstName, lastName, email, password } = user;

    return (
        <div>
            <Register
                firstName={firstName}
                onChange={handleChange}
                lastName={lastName}
                email={email}
                password={password}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default RegisterView;
