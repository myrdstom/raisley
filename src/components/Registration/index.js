import React from 'react';
import Register from './register';
import { baseUrl } from '../../config/config';
import { apiRequest } from '../../api/api.action';
import { useFormik } from 'formik';
import './registration.styles.scss';
import * as Yup from 'yup';

const RegisterView = () => {
    const formik = useFormik({
        initialValues: { firstName: '', lastName: '', email: '', password: '' },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('First name required'),
            lastName: Yup.string()
                .required('Last name required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email required'),
            password: Yup.string()
                .required('password required'),
        }),
        onSubmit: (values) => {
            const { firstName, lastName, email, password } = values;
            const jsonData = {
                campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
                data: {
                    firstName,
                    lastName,
                    email,
                    password,
                },
            };
            apiRequest(baseUrl, jsonData);
        },
    });

    return (
        <div>
            <Register
                firstName={formik.values.firstName}
                onChange={formik.handleChange}
                lastName={formik.values.lastName}
                email={formik.values.email}
                password={formik.values.password}
                onSubmit={formik.handleSubmit}
                onBlur={formik.handleBlur}
                errors={formik.errors}
                touched={formik.touched}
            />
        </div>
    );
};

export default RegisterView;
